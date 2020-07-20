import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  users: any;
  orders: any;
  token = localStorage.getItem('authToken');

  constructor(
    private usersService: UsersService,
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {
    this.UserInfo(this.token);
  }

  UserInfo(token) {
    this.usersService.getUserInfo(token).subscribe((user: any) => {
      this.users = user;
    });
  }

  OrdersInfo(id) {
    this.ordersService.getOrderById(id).subscribe((order: any) => {
      this.orders = order;
      console.log(order);
    });
  }
}
