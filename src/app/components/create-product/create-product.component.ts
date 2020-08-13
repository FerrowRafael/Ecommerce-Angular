import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/services/users.service';
import { ProductsService } from 'src/app/services/products.service';
import { CategoriesService} from 'src/app/services/categories.service'

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  msg:string = '';
  selectedValue: string;
  message;
  categories;
  form: FormGroup;
  users: any;
  products: any;
  token = localStorage.getItem('authToken');

  //File Preview
  imageURL: string;
  uploadForm: FormGroup;

  @ViewChild('this.form.value') formValues;

  constructor(
    private usersService: UsersService,
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    public fb: FormBuilder,
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
    this.getCategories()
  }

  // CREATE PRODUCT
  addProduct() {
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
    this.ProductsByUserId(this.token); //LLAMAR AL OTRO COMPONENTE
    // this.formValues.resetForm();
    this.msg = 'Product create'; 
    // if (imageInput.files[0])
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

  // GET CATEGORIES
  getCategories() {
    this.categoriesService.getCategoriesAll()
      .subscribe((category: any) => {
        this.categories = category;
      })
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
      this.categoriesService.getCategoriesAll()
      .subscribe((category: any) => {
        this.categories = category;
      })
    })
  }
}
