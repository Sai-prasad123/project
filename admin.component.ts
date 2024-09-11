import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

interface Product{} 

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    
    products : Product[]=[];
       
    constructor(private productSerivce : ProductService){ }
    
    ngOnInit(): void {
      this.productSerivce.getProducts().subscribe((data:Product[])=>{
       
        this.products = data ;


      });
    }

}
