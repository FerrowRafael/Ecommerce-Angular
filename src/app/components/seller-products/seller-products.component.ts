import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../models/user.model'
import { UsersService } from 'src/app/services/users.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-seller-products',
  templateUrl: './seller-products.component.html',
  styleUrls: ['./seller-products.component.scss']
})
export class SellerProductsComponent implements OnInit {

  users: any;
  displayedColumns: string[] = ['id', 'name', 'image', 'price', 'update', 'delete'  ];
  public dataSource = new MatTableDataSource<User>();
  token = localStorage.getItem('authToken');

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
      .subscribe(res => {
        this.dataSource.data = res as User[];
      })
    })
  }

  public redirectToUpdate = (id: string) => { 
  }
 
  public redirectToDelete = (id: string) => { 
  }
}
