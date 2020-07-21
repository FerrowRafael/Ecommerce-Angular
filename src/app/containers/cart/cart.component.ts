import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: any;
  constructor(
    public cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.productsCart()
  }

  productsCart() {
    console.log("PATATA")
    this.cartService.productsInCart().subscribe((product: any) => {
      this.products = product;
      console.log(this.products);
    });
  }
}
