import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-userlist',
  templateUrl:'./userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userList: Array<any>;
     
    constructor(private userdataService: UserdataService){            
    }
    ngOnInit() {
      /* this.userdata.getUsers().subscribe(userarray  => {
        this.userList=userarray;
      }); */
      this.userList= this.userdataService.getUsers();
        
    }
    /* addUser(){
      this.userdata.addUser({name:'Tina',email:'tina@gmail.com'}).subscribe(resp=>{
        console.log(resp);
      });
    } */
}
