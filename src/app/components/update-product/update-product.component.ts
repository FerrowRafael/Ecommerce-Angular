import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  msg:string = '';
  model:any = {};
  model2:any = {};
  myValue;
  products: any;
  hideUpdate:boolean = true;
  categories: any;

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
  ) { }

  ngOnInit(): void {
  }

  // UPDATE PRODUCT
  updateProduct():void {
    let i = this.myValue;
    for(let j = 0; j < this.products.length; j++){
      if(i == j) {
        this.products[i] = this.model2;
        let id = this.model2._id
        this.productsService.ProductUpdate(this.model2, id)
        .subscribe((product: any) => {
      });
        this.msg = 'Product update';
      
      }
    } 
    // this.ProductsByUserId(this.token); //LLAMAR AL OTRO COMPONENTE
    this.hideUpdate = true;
  }

  editProduct(i):void {
    this.hideUpdate = false;
    this.model2._id = this.products[i]._id;
    this.model2.name = this.products[i].name;
    this.model2.description = this.products[i].description;
    this.model2.image = this.products[i].image_path;
    this.model2.price = this.products[i].price;
    this.model2.popularity = this.products[i].popularity;
    this.model2.stock = this.products[i].stock;
    this.model2.category = this.products[i].category;
    this.myValue = i;
  }
}
