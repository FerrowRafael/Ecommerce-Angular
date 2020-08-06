import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ProductsService } from 'src/app/services/products.service';
import { CategoriesService} from 'src/app/services/categories.service'

@Component({
  selector: 'app-seller-products',
  templateUrl: './seller-products.component.html',
  styleUrls: ['./seller-products.component.scss']
})
export class SellerProductsComponent {
  title:string = 'Angular Crud';
  
  msg:string = '';

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;
  token = localStorage.getItem('authToken');
  users: any;
  products: any;
  categories: any;
  
  constructor(
    private usersService: UsersService,
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
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
      this.categoriesService.getCategoriesAll()
      .subscribe((category: any) => {
        this.categories = category;
      })
  })
  }
  

  addProduct():void{
    this.products.push(this.model);
    console.log(this.model)
    this.productsService.addProduct(this.model)
        .subscribe(res => {
          console.log(res)
    })
    this.msg = 'Producto añadido';
    this.ProductsByUserId(this.token)
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
