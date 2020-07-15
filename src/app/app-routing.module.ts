import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './containers/home/home.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { RegisterComponent } from './containers/user/register/register.component';
import { LoginComponent } from './containers/user/login/login.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'details/:id', component: ProductDetailComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
