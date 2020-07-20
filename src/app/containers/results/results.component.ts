import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  productos: '';
  name: '';
  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {

  }

  // PRODUCTOS BY NAME
  ProductsByName(name: string) {
    this.productsService.getProductsByName(name).subscribe((producto: any) => {
      this.productos = producto;
    });
  }


}
