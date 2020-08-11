import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ProductsService } from 'src/app/services/products.service';
import { User } from '../../models/user.model';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public errorMsg: string;
  public successMsg: string;
  public mensaje: string;
  private token: any;
  title: '';
  products: '';
  

  constructor(
    public usersService: UsersService,
    public productsService: ProductsService,
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.token = localStorage.getItem('authToken');
    
    this.usersService.logout(this.token)
      .subscribe(
        (res: User) => {
          localStorage.removeItem('authToken');
          localStorage.setItem('cart', "");
          localStorage.removeItem('cart');
          this.usersService.setUser(null);
          setTimeout(() => {
          this.router.navigate(['login']);
          }, 2000);
          // this.usersService.setUser();
        },
        (error) => console.log(error)
      );
  }

  mensajeLogout($scope) {
    $scope.mensaje = 'Ya te vas?';
  }

  searchProducts(name: string) {
    this.productsService.getProductsByName(name).subscribe((product: any) => {
      this.products = product;
    });
  }
  getAllProducts() {
    this.productsService.getProductsAll()
      .subscribe(res => {
        this.productsService.product = res
      })
  }
  search(event) {
    console.log(event.target.value)
    if (!event.target.value) {
      return this.getAllProducts();
    }
      this.productsService.getProductsByName(event.target.value)
      .subscribe(
        (res: HttpResponse<any>)  =>{
          this.productsService.product = res
          console.log(res)
        } ,
        
        (error: HttpErrorResponse) => console.error(error)
        );
  }
}
