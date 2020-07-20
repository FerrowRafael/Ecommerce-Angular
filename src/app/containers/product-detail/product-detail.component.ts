import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

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

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.detailsById(params.id);
      this.product = params.id;
    });
  }

  detailsById(id: number) {
    console.log(id);
    this.productsService.getProductsById(id).subscribe((pelicula: any) => {
      this.detalle = pelicula;
      console.log(this.detalle);
    });
  }
}
