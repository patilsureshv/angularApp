import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-registration',
  templateUrl:'./registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private userdata: UserdataService,private router: Router,private formBuilder: FormBuilder,) { 
     this.signupForm = new FormGroup({
       firstname: new FormControl(),
       lastname: new FormControl(),
       username: new FormControl(),
       password: new FormControl()
     }); 
  }

  ngOnInit() {  
    /* this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  }); */ 
  }
  //get f() { return this.signupForm.controls; }

  onSubmit(){
    if(this.signupForm.valid){
      console.log('form submitted', this.signupForm.value);
      /* this.userdata.addUser({email:this.signupForm.value.email,Password:this.signupForm.value.password,gender:this.signupForm.value.gender,country:this.signupForm.value.country}).subscribe(resp=>{
        console.log(resp);
      });
    }else{
      console.log('input wrong input');
    } */
    this.userdata.addUser(
      {firstname:this.signupForm.value.firstname,
        lastname:this.signupForm.value.lastname,
        username:this.signupForm.value.username,
      password:this.signupForm.value.password});
    this.router.navigate(['/login']);
    
    }
  }
}
