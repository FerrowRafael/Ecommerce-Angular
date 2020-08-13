import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ProductsService } from 'src/app/services/products.service';
import { OrdersService } from 'src/app/services/orders.service';
// import { DataService } from 'src/app/services/data.service';
// import { ListSellerProductsComponent } from '../../components/list-seller-products-component';
// import { UpdateProductComponent } from '../../components/update-product-component';

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.scss'],
  // providers: [DataService],
  // directives: [ListSellerProductsComponent, UpdateProductComponent]
})
export class SellerProfileComponent implements OnInit {

  users: any;
  products: any;
  token = localStorage.getItem('authToken');
  hideUpdate: any;

  constructor(
    private usersService: UsersService,
    private productsService: ProductsService,
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {
    this.UserInfo(this.token);
  }

  // COMUNICACION ENTRE COMPONENTES
  enviarAGoten: string; 

  mensajeParaGoten(mensaje: string){
    this.enviarAGoten = mensaje;
  }

  UserInfo(token) {
    this.usersService.getUserInfo(token).subscribe((user: any) => {
      this.users = user;
     
    });
  }

  // SHOW PRODUCTS
  ProductsByUserId(token) {
    this.usersService.getUserInfo(token).subscribe((user: any) => {
      this.users = user;
      this.productsService.getProductsByUserId(this.users._id)
      .subscribe((product: any) => {
        this.products = product;
        console.log(this.products)
      }) 
    })
  }
  
  
}
