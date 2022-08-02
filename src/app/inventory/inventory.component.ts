import { Component, OnInit } from '@angular/core';
import { ProductdataserviceService } from '../productdataservice.service';
import { Product } from '../product-list/product';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  //providers:[ProductsdataService]
})
export class InventoryComponent implements OnInit {
  products:Array<Product>;
  constructor(private dataService:ProductdataserviceService) {
      
  }

  ngOnInit(): void {
    this.products = this.dataService.getProductList();
  }  
  delete(id:number){
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].id==id)
        this.products.splice(i,1);
    }
  }
  setNewValue(newPrice,id: number){
    let p= this.findproductbyid(id);
    p.price= newPrice;
  }
  findproductbyid(id:number):Product{
    //let p= this.products.find(p=> id===id);
    for(let p of this.products){
      if(p.id== id)
        return p;
    }
  }
}
