import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { OrdersService } from 'src/app/services/orders.service';
@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {

  users: any;
  orders: any;
  token = localStorage.getItem('authToken');
  id: '';

  constructor(
    private usersService: UsersService,
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {
    this.UserInfo();
    this.OrdersInfo(this.id);
  }

  UserInfo() {
    this.usersService.getUsersAll().subscribe((user: any) => {
      console.log(user)
      this.users = user;
    });
  }

  OrdersInfo(id) {
    this.ordersService.getOrdersAll(id).subscribe((order: any) => {
      this.orders = order;
      console.log(order);
    });
  }
}
