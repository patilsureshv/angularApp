import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username:string;
  constructor(private auth:AuthService) { }

  ngOnInit() {
      this.auth.getUserName().subscribe(newusername => this.username= newusername);
  }

}
