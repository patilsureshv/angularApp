import { Component, OnInit } from '@angular/core'; //typescript imports
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'demo'; //model
  username:string;
  editTitle(){//controller

  }
  constructor(private auth:AuthService, private router:Router) { }
  ngOnInit(){
    this.auth.getUserName().subscribe(newusername => this.username= newusername);
  }
  logout(){
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
