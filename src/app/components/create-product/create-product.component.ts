import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { NgForm } from '@angular/forms';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  public errorMsg: string;
  public successMsg: string;
  selectedValue: string;
  message;
  categories;

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.AllCategories()
  }

  // PRODUCT CREATE
  ProductCreate(productForm: NgForm){
    const product = productForm.value;
    console.log(product);
    this.productsService.addProduct(product)
      .subscribe(
        (res: HttpResponse<any>) => {
        // tslint:disable-next-line: no-string-literal
        this.successMsg = res['message'];
        console.log(this.successMsg);
        setTimeout(() => {
        }, 2000);
        },
        (error: HttpErrorResponse) => {
        this.errorMsg = error.error.message;
        setTimeout(() =>  this.errorMsg = '' , 2000);
    });
  }

  // ALL CATEGORIES
  AllCategories() {
    console.log("vienen las categorias")
    this.categoriesService.getCategoriesAll().subscribe((category: any) => {
      this.categories = category;
      console.log(category);
    });
}

}
