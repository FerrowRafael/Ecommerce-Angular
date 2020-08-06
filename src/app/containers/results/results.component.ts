import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  productos: '';
  products: '';
  name: '';
  constructor(
    public productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  // PRODUCTOS BY NAME
  ProductsByName(name: string) {
    this.productsService.getProductsByName(name).subscribe((producto: any) => {
      this.productos = producto;
    });
  }

  getAllProducts() {
    this.productsService.getProductsAll()
    .subscribe((res: any) => {
      this.productsService.product = res
    })
  }

  search(event) {
    console.log(event.target.value)
    if (!event.target.value) {
      return this.getAllProducts();
    }
    this.productsService.getProductsByName(event.target.value)
    .subscribe(
        (res: HttpResponse<any>)  =>{
          this.productsService.product = res
          console.log(res)
        } ,
        
        (error: HttpErrorResponse) => console.error(error)
        );
  }
}
