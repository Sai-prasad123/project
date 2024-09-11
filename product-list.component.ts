import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

interface Product{
  name:string,
  price:number
}
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  implements OnInit{
  products:Product[] =[] ;
  searchTerm = '';
  filteredProducts :Product[]=[];
  currentPage = 1;
  pageSize = 5;
   
     constructor(private productService: ProductService, private cartService: CartService){}
  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = this.paginate(this.filterProducts());
    });
  }
  filterProducts() {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  paginate(products: any[]) {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return products.slice(startIndex, startIndex + this.pageSize);
  }

  onSearch() {
    this.filteredProducts = this.paginate(this.filterProducts());
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.filteredProducts = this.paginate(this.filterProducts());
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
