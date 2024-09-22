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

# Hotel App Snippets

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

# Hotel App: Asynchronous Modern Web Architecture

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

## Mocking API Requests Using Mockoon


