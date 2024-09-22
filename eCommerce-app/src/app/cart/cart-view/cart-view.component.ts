import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  cartItems: Product[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartItem().subscribe(x => {
      this.cartItems = x;
      this.totalPrice = this.getTotalPrice()
    })
  }

  getTotalPrice(): number {
    let total = 0;
    for (let i of this.cartItems) {
      total += i.price
    }

    return total;
  }

  clearCart(): void {
    this.cartService.clearCart().subscribe(x => {
      console.log("Delete Message: ", x);
    });
  }

  checkoutCart(): void {
    this.cartService.checkoutCart(this.cartItems).subscribe(x => {
      console.log("Checkout Message: ", x)
    })
  }

}
