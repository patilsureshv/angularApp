import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductdataserviceService } from '../productdataservice.service';
import { BigBasketDataService } from '../BigBasketData.service';
import { CartdataService } from '../cartdata.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Array<Product>;
  constructor(private dataService:ProductdataserviceService, private cartService: CartdataService) {
    //let dataService= new ProductdataserviceService();
    
  }

  ngOnInit(): void {
    this.productList = this.dataService.getProductList();   
  }
  addToCart(item: Product){
    console.log('add to cart');
    this.cartService.addProduct(item);
  }

}
