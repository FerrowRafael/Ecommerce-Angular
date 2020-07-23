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
  id: '';
  public show:boolean = false;
  public buttonName:any = 'Show';

  constructor(
    private usersService: UsersService,
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {
    this.UserInfo(this.token);
    this.OrdersInfo(this.id);
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

  toggle() {
    this.show = !this.show;
    // CHANGE THE NAME OF THE BUTTON.
    // if(this.show)  
    //   this.buttonName = "Hide";
    // else
    //   this.buttonName = "Show";
  }
}
