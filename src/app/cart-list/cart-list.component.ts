import { Component, OnInit } from '@angular/core';
import { CartdataService } from '../cartdata.service';
import { Product } from '../product-list/product';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartProductList: Array<Product>;
  constructor(private cartService: CartdataService) { }

  ngOnInit(): void {
    this.cartProductList = this.cartService.getCartProductList();
  }

}
