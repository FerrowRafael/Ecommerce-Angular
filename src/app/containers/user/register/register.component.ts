import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    public userService: UsersService,
    private router: Router,
    private notification: NzNotificationService
  ) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  register(registerForm: NgForm) {
    if (registerForm.controls.password.errors?.pattern) {
      return this.notification.warning('Wrong password',
      'Your password must contain at least a lowercase letter, a uppercase letter, a number, and must be between 8 and 40 characters');
    }
    if (registerForm.valid) {
      this.userService.register(registerForm.value)
        .subscribe(res => {
          this.notification.success('User created', 'User successfully created', { nzDuration: 2000 });
          setTimeout(() => this.router.navigate(['/login']), 2000);
        });
    }
  }
}
