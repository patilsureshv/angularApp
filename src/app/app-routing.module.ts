import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserlistComponent } from './userlist/userlist.component';
import { RegistrationComponent } from './registration/registration.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { CartListComponent } from './cart-list/cart-list.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'users',
    component:UserlistComponent,
    children:[
      {
        path:'userdetails/:id',
        component:UserdetailsComponent
      }
    ]
  },
  {
    path:'inventory',
    component:InventoryComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'products',
    component:ProductListComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'cart',
    component:CartListComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
