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
      // this.getGenreId;
      // this.order = this.usersService.getOrder();
    });
  }

  detailsById(id: number) {
    console.log(id);
    this.productsService.getProductsById(id).subscribe((pelicula: any) => {
      this.detalle = pelicula;
      console.log(this.detalle);
      // this.genres = pelicula.Genres;
      // console.log(this.genres);
      // for (const genre of this.genres){
      //   this.generos.push(genre.id);
      // }
      // const genre1 = this.generos[0];
      // this.getGenreId(genre1);
      // this.actores = pelicula.Actors;
      // console.log(this.actores)
    });
  }
}
