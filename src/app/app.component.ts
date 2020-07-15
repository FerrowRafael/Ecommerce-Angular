import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front-ecommerce';
  constructor(public usersService: UsersService) { }
  // tslint:disable-next-line: typedef
  ngOnInit() {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.usersService.getUserInfo(token)
        .subscribe((res: User) => {
          this.usersService.setUser(res);
        });
    }
  }
}

