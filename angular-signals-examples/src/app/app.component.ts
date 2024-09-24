import { Component, computed, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { Product } from './product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  //NORMAL SIGNAL EXAMPLE
  //heme = signal('light');
  //label = this.theme();

  //COMPUTED SIGNAL EXAMPLE
  // price = 19;
  // quantity = signal(10);

  //Only read computed signal, as can't be changed by outside
  // totalPrice = computed(() => this.price * this.quantity())

  // changeQty(event: Event) {
  //   this.quantity.set((event.target as HTMLInputElement).valueAsNumber)
  // }


  //USE CASE EXAMPLE
  // products = signal([
  //   { id: 1, name: 'Milk', price: 1.45 },
  //   { id: 2, name: 'Bread', price: 3.10 },
  //   { id: 1, name: 'Butter', price: 2.10 },
  // ])

  // filterName = signal('');

  // filteredProducts = computed(() => {
  //   return this.products().filter(x => x.name.toLowerCase().includes(this.filterName()));
  // })

  // changeFilter(event: Event) {
  //   let newFilterName = (event.target as HTMLInputElement).value;
  //   this.filterName.set(newFilterName);  //Change signal filterName, which is part of computed products.
  //   //Using filteredProducts in our HTML allows it to be rerendered.
  // }

  //SIGNAL EXAMPLE
  allProducts: Product[] = [
    { id: 1, name: 'Milk', price: 1.45 },
    { id: 2, name: 'Bread', price: 3.10 },
    { id: 1, name: 'Butter', price: 2.10 },
  ]


  constructor() {

    //Normal Signal
    //Reading value of theme
    // effect(() => {
    //   this.label = this.theme(); //Makes it dependant to theme signal
    // })



  }


  ngOnInit(): void {

    //Normal 
    //Setting value of signal
    //this.theme.set('dark')
    //this.theme.set(this.theme() == 'light' ? 'dark' : 'light')

    //Updating using the current value. Grants access to old value
    //this.theme.update(currentValue => currentValue == 'light' ? 'dark' : 'light')

    //Get value from signal and use it
    //document.body.className = this.theme();


  }

  // NORMAL SIGNAL
  // toggleDarkMode() {
  //   this.theme.update(currentValue => currentValue == 'light' ? 'dark' : 'light')
  // }



}
