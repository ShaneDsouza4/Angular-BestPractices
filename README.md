# Angular Snippets

## Appointment App Snippets

The Appointment app follows best practices in the following areas:

- **Interfaces**: Ensured the use of TypeScript interfaces for data structures.
- **Data Binding**: Implemented both one-way and two-way data binding techniques.
- **NgFor with Index**: Leveraged `ngFor` to iterate over lists with index tracking.
- **Date Pipe**: Applied Angular’s built-in pipe to format dates.
- **Array Manipulation**: Used `splice(index, 1)` for array item removal.
- **LocalStorage**: Utilized `localStorage.setItem` and `localStorage.getItem` for data persistence.
- **Lifecycle Hooks**: Implemented `ngOnInit` lifecycle hook for component initialization.
- **JSON Handling**: Used `JSON.stringify` and `JSON.parse` for object storage and retrieval.
- **Bootstrap**: Installed Bootstrap 5.3 (`npm i bootstrap@5.3`) for responsive UI design.
- **UUID**: Integrated `uuid` for unique ID generation (`npm install uuid && npm install --save-dev @types/uuid`).

## Hotel App Snippets

The Hotel app follows best practices in the following areas:

- **Router Outlet**: Efficient use of `router-outlet` for navigation.
- **Modules**:
  - Generate a module using: `ng g m home`
  - Generate a component within the module: `ng g c home --module=home`
  - Add the `HomeModule` to `app.module.ts`.
- **App Architecture**: Implements Create, Read, Update, Delete (CRUD) functionality.
- **Router Structure**:
  - Root routing is set up to navigate to the `HomeComponent`, `ReservationListComponent`, and `ReservationFormComponent`.
- **Services**:
  - `ReservationService` is used to load and save data.
- **Angular Router**:
  - Use `RouterLink` for navigation, `navigate()` for redirection, and handle dynamic routes with `[routerLink]="['/edit', i.id]"` and `this.activatedRoute.snapshot.paramMap.get('id')`.
- **Reactive Forms**:
  - Leverages `FormGroup`, `FormBuilder`, `formControlName`, custom Validators, validation messages, and `patchValue` for updates.
- **Disabled State**: Manage form control disabled states effectively.
- **ngIf**: Conditional rendering using `ngIf`.
- **Reservation CRUD**: Full CRUD operations for managing reservations using the reservation service.
- **ng-template**: Uses `ng-template` and template references to display conditional messages (e.g., "No reservations").
- **Unique IDs**: Generates unique IDs using `uuid` or `Date.now().toString()`.

## Hotel App: Asynchronous Modern Web Architecture

Used Mackoon to replicate APIs.

## Architecture Overview
- **Database (SQL or NoSQL)** ↔ **Backend Application + RESTful API** ↔ **Frontend Application (Angular, React)**
- The **Frontend** sends HTTP requests to the **Backend**.
- The **Backend** sends HTTP responses to the **Frontend** with a status code.
- HTTP requests are asynchronous and fetch data from the database via the backend.

## HTTP Request Types
- **GET**: Retrieve data
- **POST**: Submit data
- **PUT**: Update data
- **DELETE**: Remove data

## HTTP Status Codes
- **200**: Success
- **300**: Redirection
- **400**: Client errors (e.g., 404 Page Not Found)
- **500**: Server errors (e.g., Database is down)

## Making HTTP Calls from Angular

1. Add `HttpClientModule` in `app.module.ts`:
   import { HttpClientModule } from '@angular/common/http';
2. In the service file;
	import { HttpClient } from '@angular/common/http';
	import { Observable } from 'rxjs';

## Observables in Angular
- Observables allow asynchronous code execution. It enables waiting for the results without blocking other code execution.
- When a method returns an Observable, any component can subscribe to it to listen for data changes and get notified when the data is available.

### Method Making an HTTP Request Using Observables
getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl + "/reservations");
}

### Component Subscribing to the Method
this._reservationService.getReservations().subscribe(data => {
    this.reservations = data;
});

## eCommerce App Snippets

The eCommerce app follows best practices in the following areas:

- **Class Models**: Generated product models using `ng g class models/products`, including default fields such as `id = 0`, `name`, `price`, and `image_url`.
- **Routing**: Implemented route redirection with `redirectTo` and `pathMatch: 'full'` for proper navigation.
- **Environment Configuration**: Set `apiUrl` for both development and production environments. Used `ng serve --configuration=development` for development builds.
- **Angular Material**: Added Angular Material via `ng add @angular/material`. Applied the prebuilt theme `indigo-pink` to `styles.css` with `@import "@angular/material/prebuilt-themes/indigo-pink.css"`.
- **Responsive Grid**: Utilized `@angular/flex-layout` for a responsive grid system (`npm i @angular/flex-layout`).
- **Search Functionality**: Added a search bar using input fields to filter products dynamically.
- **Filter with Dropdown**: Implemented dropdown functionality for filtering products by category, price, or other criteria.

## Library Management: Reactive Web Apps using NgRx

## Without NgRx
In a traditional Angular app structure:

- **AppComponent** 
  - ➔ **CartView Component** <-> **ProductService**
  - ➔ **ProductList Component** <-> **ProductService**
    - ➔ **AddToCart**

The **CartView Component** has no state maintained for the **AddToCart** action and doesn't know when something is added to the cart. This creates a problem.

### Issues:
- Fetching data is required to update the states.
- Data inconsistency due to dependencies or multiple sources of truth (e.g., multiple services).
- "Sources of truth" means both services need to know the state of **AddToCart**. Assume both work with **CART**.
- Complex data flow that is hard to understand, track, and debug.

## Solution: Global State Management with NgRx
NgRx introduces a **single state** for building web applications, providing a **single source of truth**. It follows a reactive architecture, responding to changes in the state.

NgRx uses the **Flux Pattern** for state management:
- Create a single state in the app and manage it using NgRx.

### How NgRx Works:
Previously, data was fetched from a service and shown in the component. The service retrieved the data from the backend.

With NgRx:
### Part 1:
- Add something to the cart by dispatching an **ACTION** from the **COMPONENT**.
- The action is processed by a **REDUCER**, which modifies the **STORE**.
- The **STORE** changes are spread via **SELECTOR**, updating the subscribed component.

### Part 2:
- For asynchronous operations like loading data from the database:
  - Use **EFFECTS** to load the data asynchronously, going through Part 1 starting from an **ACTION**.

### Core Concepts:
- **STORE**: Holds the application state, but cannot be changed directly. Reducers modify the state. NgRx uses one-way data flow.
- **ACTIONS**: Events that modify the state in the store.
- **REDUCERS**: Functions that process actions and modify the state based on the action type (e.g., add to cart, delete from cart, load from the database).
- **EFFECTS**: Handle asynchronous operations (e.g., fetching data from a server) and trigger new actions (e.g., success or failure).

## One-Way Data Flow in NgRx:
- **Actions** ➔ **Reducer** ➔ **UpdateState** ➔ **Selectors** share updates.

- **Reducers** process actions and update the state.
- Components receive updates via **selectors** they are subscribed to.
- The updated state is automatically passed to the components through selectors.

## NgRx Flow Case Scenario:
- Display products inside a **COMPONENT** that dispatches an action like **LoadAllProducts**.
- The action triggers an **EFFECT**, which calls the **SERVICE** to load the products.
- Once the result is fetched, a new **ACTION** (like success) is dispatched.
- The **REDUCER** processes the action (e.g., one reducer for products, another for authentication).
- The state in the **STORE** is updated and shared via **SELECTORS**.
- Components subscribed to relevant selectors get the updated state.

### Example:
- **Book Reducer**: Add Book, Remove Book.
- **User Reducer**: Add User, Remove User, Authorize User.
- The **Reducer** copies the current state segment, makes changes, and returns the new state. It combines the current state and the action to produce a new state.

## NgRx Setup
Install NgRx Store and Effects:
npm install @ngrx/store@16.2 @ngrx/effects@16.2

Install NgRx DevTools for debugging in Chrome, then run;
npm install @ngrx/store-devtools@16.2.0
