import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//#region Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
//#endregion

//#region Containers
import { HomeComponent } from './containers/home/home.component';
import { RegisterComponent } from './containers/user/register/register.component';
import { LoginComponent } from './containers/user/login/login.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { AdminProfileComponent } from './containers/admin-profile/admin-profile.component';
import { PurchaisingProcessComponent } from './containers/purchaising-process/purchaising-process.component';
import { ResultsComponent } from './containers/results/results.component';
//#endregion

//#region ngDesign Zorro
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { es_ES } from 'ng-zorro-antd/i18n';
//#endregion
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    ProductDetailComponent,
    ProfileComponent,
    AdminProfileComponent,
    PurchaisingProcessComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
