import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { NgForm } from '@angular/forms';

import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private usuariosService: UsersService,
    public router: Router,
    private notification: NzNotificationService,
  ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  login(loginForm: NgForm) {
    if (loginForm.valid) {
      this.usuariosService.login(loginForm.value)
        .subscribe(
          (res: HttpResponse<object>) => {
            console.log("Login hasta aqui")
            this.notification.success(
              'Login realizado con éxito',
              res['message']
              );
            localStorage.setItem('authToken', res['token']);
            this.usuariosService.setUser(res['user']);
            setTimeout(() => {
                this.router.navigate(['home']);
              }, 2000);
          },
          (error: HttpErrorResponse) => {
            this.notification.error(
              'Problema al logear al usuario',
              error['error']['message']
              );
          }
        )
    }
  }
}
