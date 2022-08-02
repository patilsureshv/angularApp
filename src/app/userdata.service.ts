import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './userlist/user';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  userList:Array<User>=[];
  constructor(private http:HttpClient) { }
  /* getUsers():Observable<any>{
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  } */
  getUsers():Array<User>{
    return this.userList;
  }
  // getUser(id:number):Observable<any>{
  //   return this.http.get('http://jsonplaceholder.typicode.com/users/'+ id);
  // }
  getUser(username:string):User{
    //return this.userList.find(x=>);
    return this.userList.find(x => x.username === username);
  }
  /* addUser(user:any):Observable<any>{
    return this.http.post('http://jsonplaceholder.typicode.com/users', user);
  } */
  addUser(user:any){
    this.userList.push(user);
  }
}
