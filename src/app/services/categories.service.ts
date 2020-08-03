import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  BASE = 'http://localhost:3001/';

  constructor(
    private http: HttpClient
  ) { }

  // 1 ALL CATEGORIESS
  getCategoriesAll() {
    return this.http.get(`${this.BASE}categories/all`, {
      
    });
  }

  // // 3 CATEGORY ADD
  // CategoryCreate(category){
  //     return this.http.post(`${this.BASE}categories/add`, category, {
  //       headers: {
  //         Authorization: localStorage.getItem('authToken') || ''
  //       }
  //     });
  // }
}
