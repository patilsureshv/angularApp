import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { strict } from 'assert';
import { UserdataService } from './userdata.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  subject = new Subject<string>();// stream of values
  constructor(private userDataSerice:UserdataService) { 
    
  }
  setUserName(username:string){
    this.subject.next(username); // add it to the stream of values
  }
  getUserName():Observable<string>{
    return this.subject.asObservable(); // emit  every new value
  }
  login(username:string,password:string):string{
    //const users = this.userDataSerice.userList.find();
    const users = this.userDataSerice.getUsers();
    console.log(users);
    const user=users.find(x => x.username === username && x.password === password);
    if (!user) {
      return 'Invalid user name or password';
    }else{
      return '';
    }
  }
  logout(){
    this.subject.next(null);
  }
}
