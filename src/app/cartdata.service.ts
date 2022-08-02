import { Injectable } from '@angular/core';
import { Product } from './product-list/product';

@Injectable({
  providedIn: 'root'
})
export class CartdataService {

  carProductList:Array<Product>=[];
  constructor() { }
  addProduct(product: Product){
    this.carProductList.push(product);
  }
  getCartProductList():Array<Product>{
    return this.carProductList;
  }
}
