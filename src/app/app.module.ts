import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BigBasketDataService } from './BigBasketData.service';
import { InventoryComponent } from './inventory/inventory.component';
import { PriceupdaterComponent } from './priceupdater/priceupdater.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { RegistrationComponent } from './registration/registration.component';
import { MenuComponent } from './menu/menu.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing/routing.module';
//import { MatInputModule } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    PriceupdaterComponent,
    HeaderComponent,
    UserlistComponent,
    UserdetailsComponent,
    RegistrationComponent,
    MenuComponent,
    InventoryComponent,
    CartListComponent // list of components
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RoutingModule,
  ],
  providers: [BigBasketDataService],
  bootstrap: [AppComponent] // which is root component
})
export class AppModule { }
