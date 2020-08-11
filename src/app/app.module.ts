import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//#region Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { SellerProductsComponent } from './components/seller-products/seller-products.component';
//#endregion

//#region Containers
import { HomeComponent } from './containers/home/home.component';
import { RegisterComponent } from './containers/user/register/register.component';
import { LoginComponent } from './containers/user/login/login.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { AdminProfileComponent } from './containers/admin-profile/admin-profile.component';
import { ResultsComponent } from './containers/results/results.component';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { SellerProfileComponent } from './containers/seller-profile/seller-profile.component';
import { CartComponent } from './containers/cart/cart.component';
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
import { MaterialModule } from './material.module';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

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
    ResultsComponent,
    UserProfileComponent,
    CreateProductComponent,
    UpdateProductComponent,
    SellerProfileComponent,
    CartComponent,
    SellerProductsComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatBadgeModule,
    MatSelectModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
