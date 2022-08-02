import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserdataService } from '../userdata.service';
import { flatMap } from 'rxjs/internal/operators';
//import { FlatMap } from "rxjs/operators";

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  userid: string;
  user: any;
  //params: any;
  constructor(private activateroute: ActivatedRoute, private userservice: UserdataService) {
    console.log(this.activateroute.params);
  }

  ngOnInit() {
     /* this.activateroute.params.subscribe(params =>{
       console.log('user id' + params['id']);
      this.userid=params['id'];
    }); */ 
    const queryParams = this.activateroute.snapshot.queryParams
    const routeParams = this.activateroute.snapshot.params;

        // do something with the parameters
        console.log(routeParams.username);

    //goToProductDetails(id) {
    //  this.router.navigate(['/product-details', id]);
    //}

    // this.activateroute.paramMap
    // .pipe(flatMap(routeparams=>this.userservice.getUser((routeparams.get('id'))))
    // .subscribe(userobj=>this.user=userobj);
    this.user =this.userservice.getUser(this.userid);
}
  
}
