import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',//view
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;//model
  password: string;
  resultString: string;
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  constructor(private auth:AuthService,private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
  //   this.loginForm = this.formBuilder.group({
  //     username: ['', Validators.required],
  //     password: ['', Validators.required]
  // });
  }
  //get f() { return this.loginForm.controls; }

  onSubmit(){//controller
    this.submitted = true;
    this.loading= true;
    console.log('onSubmit');
    this.resultString = this.auth.login(this.username, this.password);
    console.log(this.resultString);
    if(this.resultString === ''){
      this.auth.setUserName(this.username);
      this.router.navigate(['/products']);
    }
    //this.router.navigate(['header']);
    //this.router.navigateByUrl('/header');
  }
}
