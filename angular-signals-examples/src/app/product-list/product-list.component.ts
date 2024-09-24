import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  //Get info from App component, without creating Service
  // input is derived from Signals. Is like a signal. When input changes, computed signal also changes.
  products = input.required<Product[]>()

  filteredProducts = computed(() => {
    return this.products().filter(product => product.name.includes("Milk"))
  })




}
