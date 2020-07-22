import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { OrdersService } from '../../services/orders.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: any;
  total:number;
  constructor(
    public cartService: CartService,
    public orderService: OrdersService,
    public router:Router
  ) { }

  ngOnInit(): void {
    // this.productsCart()
    this.total = this.cartService.productsInCart.reduce((
      acc,
      obj,
    ) => acc + (obj.price * 1),
    0);
    console.log("Total: ", this.total)
  }

  productsCart() {
    this.cartService.productsInCart.subscribe((product: any) => {
      this.products = product;
      console.log(this.products);
    });
  }

  deleteProduct(productId, event){
    console.log(productId)
    const productsFiltered = this.cartService.productsInCart.filter(p => p._id !== productId);
    localStorage.setItem('cart', JSON.stringify(productsFiltered));
    this.cartService.productsInCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  }

  mapCartProducts(products){
    console.log(products)
    products.map(function(p) {
      return p;
  });
  }
  insertOrder(event: any) {
    // let cartProduct = this.mapCartProducts(localStorage.getItem('cart'))
    const order = {
      total: this.total,
      status: "pending",
      // productIds: [{
      //   name: cartProduct.name,
      //   _id: cartProduct._id,
      //   unit: 1,
      //   subtotal: cartProduct.prize * 1
      // }]
    }
    console.log(order)
    this.orderService.OrderCreate(order)
      .subscribe((res: HttpResponse<any>)  => 
        this.router.navigate(['home'])
          );
            setTimeout(() => {
              this.router.navigate([''])
            }, 10000);
        error => console.error(error);
    localStorage.removeItem('cart');
    this.cartService.productsInCart = [];
  }
}
