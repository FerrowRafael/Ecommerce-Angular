import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/services/users.service';
import { ProductsService } from 'src/app/services/products.service';
import { CategoriesService} from 'src/app/services/categories.service'

@Component({
  selector: 'app-seller-products',
  templateUrl: './seller-products.component.html',
  styleUrls: ['./seller-products.component.scss']
})
export class SellerProductsComponent {
  
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

  //Previsualize
  imageURL: string;
  uploadForm: FormGroup;
  
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
    this.usersService.getUserInfo(token).subscribe((user: any) => {
      this.users = user;
      this.productsService.getProductsByUserId(this.users._id)
      .subscribe((product: any) => {
        this.products = product;
      })
      console.log(this.products)
      this.categoriesService.getCategoriesAll()
      .subscribe((category: any) => {
        this.categories = category;
      })
    })
  }
  
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

  submitForm() {
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
    // if (imageInput.files[0])
  }

  // CREATE PRODUCT
  addProduct():void{
    this.products.push(this.model);
    const postFormData = new FormData();
    console.log(event.target)
    // this.renderImage(postFormData)
    // postFormData.set('avatar', imageInput.files[0]);
    postFormData.set('name', this.model.value.name);
    postFormData.set('category', this.model.value.category);
    postFormData.set('description', this.model.value.description);
    this.productsService.addProduct(postFormData)
    .subscribe(res => {
    })
    this.msg = 'Producto añadido';
    this.ProductsByUserId(this.token)
    // if (imageInput.files[0])
  }

  // DELETE PRODUCT
  deleteProduct(i):void {
    var answer = confirm('Estas seguro querer eliminarlo?');
    if(answer) {
      let id = this.products[i]._id;
        this.productsService.ProductDelete(id)
        .subscribe((product: any) => {
        })
      this.products.splice(i, 1);
      this.msg = 'Producto eliminado';        
    }
  }

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
