import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = []
  filteredProducts: Product[] = []
  sortOrder: string = ""

  constructor(
    private _productService: ProductService,
    private _cartService: CartService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(x => {
      this.products = x
      this.filteredProducts = x;
    })
  }

  addToCart(product: Product) {
    this._cartService.addToCart(product).subscribe({
      next: () => {
        this.snackbar.open("Product added to cart.", "", {
          duration: 200,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        })
      }
    })
  }

  applyFilter(event: Event): void {
    let searchTerm = (event.target as HTMLInputElement).value;
    searchTerm = searchTerm.toLowerCase();

    this.filteredProducts = this.products.filter(
      x => x.name.toLowerCase().includes(searchTerm)
    )

    this.sortProducts(this.sortOrder)
  }

  sortProducts(sortValue: string) {
    this.sortOrder = sortValue;

    if (this.sortOrder == "priceLowHigh") {
      this.filteredProducts.sort((a, b) => a.price - b.price)
    } else if (this.sortOrder == "priceHighLow") {
      this.filteredProducts.sort((a, b) => b.price - a.price)
    }
  }

}
