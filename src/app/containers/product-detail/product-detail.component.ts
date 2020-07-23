import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { OrdersService } from 'src/app/services/orders.service';
import { UsersService } from 'src/app/services/users.service';
import { CartService } from 'src/app/services/cart.service';
import * as moment from 'moment';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
// import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  detalle: any;
  product: any;
  products: '';
  public message: string;
  public errorMsg: string;
  public successMsg: string;
  selectedValue: any = {};
  pedido;

  constructor(
    private productsService: ProductsService,
    private ordersService: OrdersService,
    private usersService: UsersService,
    private cartService: CartService,
    private route: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.detailsById(params.id);
      this.product = params.id;
      
      console.log(this.product);
    });
    this.AllProducts();
  }

  detailsById(id: number) {
    console.log(id);
    this.productsService.getProductsById(id).subscribe((product: any) => {
      this.detalle = product;
      console.log(this.detalle);
    });
  }

  addToCart(product) {
    console.log(product)
    if (this.cartService.productsInCart.find((p)=>p._id==product?._id))return;
    this.cartService.productsInCart.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cartService.productsInCart))
  }

  AllProducts() {
    this.productsService.getProductsAll().subscribe((product: any) => {
      this.products = product;
      console.log(product);
    });
  } 
}
