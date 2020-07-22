import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: '';
  imageURL = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';
  constructor(
    private productsService: ProductsService,
  ) {

  }

  ngOnInit(): void {
    this.AllProducts();

  }

  // PRODUCTS ALL
  // tslint:disable-next-line: typedef
  AllProducts() {
      this.productsService.getProductsAll().subscribe((product: any) => {
        this.products = product;
        console.log(product);
      });
  }


  // getImage(pelicula: any){
  //   if (pelicula.poster_path){
  //     return this.imageURL + (pelicula.poster_path);
  //   }
  //   else {
  //     return this.notImage;
  //   }
  // }

}

