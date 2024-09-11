import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce-app';

  constructor(private productService : ProductService){

  this.productService.getProducts().subscribe((res :any)=>{

  });
  }
}
