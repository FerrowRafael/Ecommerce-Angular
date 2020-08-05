import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-seller-products',
  templateUrl: './seller-products.component.html',
  styleUrls: ['./seller-products.component.scss']
})
export class SellerProductsComponent {
  title:string = 'Angular Crud';
  
  msg:string = '';

  // employees = [
  //   {'name': 'Fazt', id: 'manager', image:'https://srv.latostadora.com/designall.dll/uchiha_itachi--i:13562323972810135623191;b:f8f8f8;s:H_D1;f:f;k:39c45d8d97fe3799792b884f992e5fc9;p:1.jpg', price:'email@email.com'},
  //   {'name': 'Juan', id: 'Designer', image:'https://srv.latostadora.com/designall.dll/uchiha_itachi--i:13562323972810135623191;b:f8f8f8;s:H_D1;f:f;k:39c45d8d97fe3799792b884f992e5fc9;p:1.jpg', price:'email@email.com'},
  //   {'name': 'Pedro', id: 'Programmer', image:'https://srv.latostadora.com/designall.dll/uchiha_itachi--i:13562323972810135623191;b:f8f8f8;s:H_D1;f:f;k:39c45d8d97fe3799792b884f992e5fc9;p:1.jpg', price:'email@email.com'}
  // ];

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;
  token = localStorage.getItem('authToken');
  users: any;
  products: any;
  
  constructor(
    private usersService: UsersService,
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.ProductsByUserId(this.token)
  }

  ProductsByUserId(token) {
    console.log(token)
    this.usersService.getUserInfo(token).subscribe((user: any) => {
      this.users = user;
      console.log(this.users)
      this.productsService.getProductsByUserId(this.users._id)
      .subscribe((product: any) => {
        this.products = product;
        
      })
    })
  }

  addProduct():void{
    this.products.push(this.model);
    this.productsService.addProduct(this.model)
        .subscribe(res => {
          console.log(res)
    })
    this.msg = 'Producto añadido';
  }

  deleteProduct(i):void {
    var answer = confirm('Estas seguro querer eliminarlo?');
    if(answer) {
      let id = this.products[i]._id;
        this.productsService.ProductDelete(id)
        .subscribe((product: any) => {
        console.log(product);})
      this.products.splice(i, 1);
      this.msg = 'Producto eliminado';
      console.log(i)
        
    }
  }

  myValue;
  editProduct(i):void {
    this.hideUpdate = false;
    this.model2._id = this.products[i]._id;
    this.model2.name = this.products[i].name;
    this.model2.description = this.products[i].description;
    this.model2.image = this.products[i].image_path;
    this.model2.price = this.products[i].price;
    this.myValue = i;
  }

  updateProduct():void {
    let i = this.myValue;
    for(let j = 0; j < this.products.length; j++){
      if(i == j) {
        this.products[i] = this.model2;
        let id = this.model2._id
        this.productsService.ProductUpdate(this.model2, id)
        .subscribe((product: any) => {
        console.log(product);
      });
        this.msg = 'Producto actualizado';
        this.model2 = {};
      }
    } 
  }

  closeAlert():void {
    this.msg = '';
  }

}
