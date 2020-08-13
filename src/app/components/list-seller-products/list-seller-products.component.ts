import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/services/users.service';
import { ProductsService } from 'src/app/services/products.service';
import { CategoriesService} from 'src/app/services/categories.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-seller-products',
  templateUrl: './list-seller-products.component.html',
  styleUrls: ['./list-seller-products.component.scss']
})
export class ListSellerProductsComponent implements OnInit {

  msg:string = '';
  model:any = {};
  model2:any = {};
  myValue;
  hideUpdate:boolean = true;
  token = localStorage.getItem('authToken');
  users: any;
  products: any;
  categories: any;
  form: FormGroup;

  //File Preview
  imageURL: string;
  uploadForm: FormGroup;

  @ViewChild('this.form.value') formValues;
  
  constructor(
    private usersService: UsersService,
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    public fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.form = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      stock: [''],
      popularity: [''],
      category: [''],
      avatar: [null]
    })
  }

  ngOnInit(): void {
    this.ProductsByUserId(this.token)
  }

  // SHOW PRODUCTS
  ProductsByUserId(token) {
    console.log("funciono all product")
    this.usersService.getUserInfo(token).subscribe((user: any) => {
      this.users = user;
      this.productsService.getProductsByUserId(this.users._id)
      .subscribe((product: any) => {
        this.products = product;
        console.log(this.products)
      }) 
      this.categoriesService.getCategoriesAll()
      .subscribe((category: any) => {
        this.categories = category;
      })
    })
  }
  
  // CREATE PRODUCT
  addProduct() {
    console.log(this.form.value)
    var formData: any = new FormData();
    formData.append("name", this.form.get('name').value);
    formData.append("description", this.form.get('description').value);
    formData.append("price", this.form.get('price').value);
    formData.append("stock", this.form.get('stock').value);
    formData.append("popularity", this.form.get('popularity').value);
    formData.append("category", this.form.get('category').value);
    formData.append("avatar", this.form.get('avatar').value);

    this.productsService.addProduct(formData)
    .subscribe(res => {
    })
    this.ProductsByUserId(this.token);
    // this.formValues.resetForm(); // AUN NO FUNCIONA
    this.msg = 'Product create'; 
    // if (imageInput.files[0])
  }

  // DELETE PRODUCT
  deleteProduct(i):void {
    var answer = confirm('Are you sure you want to delete it?');
    if(answer) {
      let id = this.products[i]._id;
        this.productsService.ProductDelete(id)
        .subscribe((product: any) => {
        })
      this.products.splice(i, 1);
      this.msg = 'Product delete';        
    }
  }

  // UPDATE PRODUCT
  updateProduct():void {
    let i = this.myValue;
    for(let j = 0; j < this.products.length; j++){
      if(i == j) {
        this.products[i] = this.model2;
        let id = this.model2._id
        this.productsService.ProductUpdate(this.model2, id)
        .subscribe((product: any) => {
      });
        this.msg = 'Product update';
      
      }
    } 
    this.ProductsByUserId(this.token);
    this.hideUpdate = true;
  }

  // SHOW UPDATE COMPONENT
  editProduct(i):void {
    this.hideUpdate = false;
    this.model2._id = this.products[i]._id;
    this.model2.name = this.products[i].name;
    this.model2.description = this.products[i].description;
    this.model2.image = this.products[i].image_path;
    this.model2.price = this.products[i].price;
    this.model2.popularity = this.products[i].popularity;
    this.model2.stock = this.products[i].stock;
    this.model2.category = this.products[i].category;
    this.myValue = i;
  }

  // IMAGE MANAGEMENT
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  closeAlert():void {
    this.msg = '';
  }

}
