import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  BASE = 'http://localhost:3001/';
  public order: Order;

  constructor(
    private http: HttpClient
  ) { }


  // 1 ALL ORDERS
  getOrdersAll(token) {
    return this.http.get(`${this.BASE}orders/all`, {
      headers: {
        Authorization: localStorage.getItem('authToken') || ''
      }
    });
  }

  // 2 ORDER BY ORDER ID
  getOrderById(id: number){
    return this.http.get(`${this.BASE}orders/id/${id}`, {
      headers: {
        Authorization: localStorage.getItem('authToken') || ''
      }
    });
  }

  // 3 ORDER ADD
  OrderCreate(order): Observable<object>{
      return this.http.post<Order>(`${this.BASE}orders/add`, order, {
        headers: {
          Authorization: localStorage.getItem('authToken') || ''
        }
      });
  }

  // 4 ORDER UPDATE
  OrderUpdate(id: number, body: any){
    return this.http.get(`${this.BASE}orders/update/id/${id}`, body);
  }

  // 5 ORDER DELETE
  OrderDelete(id: number){
    return this.http.get(`${this.BASE}orders/delete/id/${id}`);
  }

  // 6 ORDER BY USER ID
  getUsersOrdersByUserId(id: number){
    return this.http.get(`${this.BASE}orders/user/${id}`);
  }

   // 8.5 ALL A USER ORDERS BY USER ID
   getOrdersByUserId(id: number){
    return this.http.get(`${this.BASE}orders/order/user=${id}`, {
      headers: {
        Authorization: 'bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    });
  }

  // 9 A USER ORDERS
  // getOrdersAllUser(id: number){
  //   return this.http.get(`${this.BASE}orders/users`);
  // }

  getOrdersUser(token) {
    return this.http.get(`${this.BASE}orders/user`, {
      headers: {
        Authorization: token
      }
    });
  }

    // ORDER BY ORDER DATE ¿?
    getUserOrderDates(){
      return this.http.get(`${this.BASE}orderDate`, {
        headers: {
          Authorization: localStorage.getItem('authToken') || ''
        }
      });
    }


}
