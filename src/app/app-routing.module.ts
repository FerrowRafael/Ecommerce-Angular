import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './containers/home/home.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { RegisterComponent } from './containers/user/register/register.component';
import { LoginComponent } from './containers/user/login/login.component';
import { AdminProfileComponent } from './containers/admin-profile/admin-profile.component';
import { SellerProfileComponent } from './containers/seller-profile/seller-profile.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'details/:id', component: ProductDetailComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminProfile', component: AdminProfileComponent },
  { path: 'sellerProfile', component: SellerProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
