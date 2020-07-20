import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//#region Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
//#endregion

//#region Containers
import { HomeComponent } from './containers/home/home.component';
import { RegisterComponent } from './containers/user/register/register.component';
import { LoginComponent } from './containers/user/login/login.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { AdminProfileComponent } from './containers/admin-profile/admin-profile.component';
import { PurchaisingProcessComponent } from './containers/purchaising-process/purchaising-process.component';
import { ResultsComponent } from './containers/results/results.component';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
//#endregion

//#region ngDesign Zorro
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { es_ES, NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);
//#endregion

//#region Material
// import { MaterialModule } from './material.module';
//#region 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    ProductDetailComponent,
    AdminProfileComponent,
    PurchaisingProcessComponent,
    ResultsComponent,
    UserProfileComponent,
    CreateProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    // MaterialModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
