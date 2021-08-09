import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import {RouterModule,Routes, Router} from "@angular/router"
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from "@angular/forms"
import { AppComponent } from './app.component';
import {AuthgaurdGuard} from "./auth/authgaurd.guard"
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import {LoginService} from "./services/login.service";
import {GetproductsService} from "./services/getproducts.service"
import { ToastComponent } from './toast/toast.component';
import { ProductlistComponent } from './productlist/productlist.component';

import { EditproductComponent } from './editproduct/editproduct.component';

import { FilterpipePipe } from './pipes/filterpipe.pipe';
const myroutes:Routes=[
{
  path:"",
  component:WelcomeComponent,
  
},

{
  path:"Login",
  component:LoginComponent
},
{
  path:"ProductList",
  component:ProductlistComponent,
  canActivate:[AuthgaurdGuard]
 
},

{
  path:"Editprodcut",
  component:EditproductComponent,
  canActivate:[AuthgaurdGuard]
}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    LoginComponent,
    ToastComponent,
    ProductlistComponent,
   
    EditproductComponent,
   
    FilterpipePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myroutes)
  ],
  providers: [AuthgaurdGuard,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
