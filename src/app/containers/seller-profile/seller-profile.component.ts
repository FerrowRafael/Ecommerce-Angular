import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ProductsService } from 'src/app/services/products.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.scss']
})
export class SellerProfileComponent implements OnInit {

  users: any;
  token = localStorage.getItem('authToken');
  
  constructor(
    private usersService: UsersService,
    private productsService: ProductsService,
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
}
