import { Component, OnInit, Input,EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-priceupdater',
  templateUrl: './priceupdater.component.html',
  styleUrls: ['./priceupdater.component.css']
})
export class PriceupdaterComponent implements OnInit {
  @Input() // will be set by parent
  pricevalue:number;
  
  @Output()
  update= new EventEmitter<number>();
  constructor() {
  
  }

  ngOnInit() {
  
  }
  
  updatePrice(){
    console.log('updatePrice');
    //emit a custom event with new value
    this.update.emit(this.pricevalue);
  }
}
