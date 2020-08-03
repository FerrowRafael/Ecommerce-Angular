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

  getProductsById(id: number){
    return this.http.get(`${this.BASE}products/search/id/${id}`);
  }

  addProduct(product): Observable<object>{
    return this.http.post(`${this.BASE}products/add`, product, {
      headers: {
        Authorization: localStorage.getItem('authToken') || ''
      }
    });
  }

  ProductUpdate(product, id: number){
    return this.http.get(`${this.BASE}products/update/id/${id}`, product, 
    // {
    //   headers: {
    //     Authorization: localStorage.getItem('authToken') || ''
    //   }
    // }
    );
  }

  ProductDelete(id: number){
    return this.http.get(`${this.BASE}products/delete/id/${id}`, {
      headers: {
        Authorization: localStorage.getItem('authToken') || ''
      }
    });
  }

  ProductsBest(){
    return this.http.get(`${this.BASE}products/best`, {
      headers: {
        Authorization: localStorage.getItem('authToken') || ''
      }
    });
  }

  ProductsRecent(){
    return this.http.get(`${this.BASE}products/recent`, {
      headers: {
        Authorization: localStorage.getItem('authToken') || ''
      }
    });
  }

  ProductsbyCategory(){
    return this.http.get(`${this.BASE}products/category`, {
      headers: {
        Authorization: localStorage.getItem('authToken') || ''
      }
    });
  }

  getProductsByName(name: string){
    console.log(name)
    return this.http.get(`${this.BASE}products/searchMa/input/${name}`);
  }
}
