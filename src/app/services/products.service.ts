import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  BASE = 'http://localhost:3001/';

  constructor(
    private http: HttpClient
  ) { }

  getProductsAll(): Observable<object>{
    return this.http.get<Product>(`${this.BASE}products/all`);
  }

  // tslint:disable-next-line: typedef
  getProductsById(id: number){
    return this.http.get(`${this.BASE}search/id=${id}`);
  }
}
