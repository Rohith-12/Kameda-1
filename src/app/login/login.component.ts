import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from "@angular/forms"
import {Router} from "@angular/router";
import {LoginService } from "../services/login.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  getusername:string=''
  ErrorMssg:string=''

loginForm:FormGroup=new FormGroup({

  Username:new FormControl('',Validators.required),
  Password:new FormControl('',Validators.required)

})

  constructor(private route:Router,private loginserve:LoginService) {
  


   }

  ngOnInit(): void {


  }
  loginsave(){
console.log(this.loginForm)
this.routeProduct(this.loginForm)

  }

  private routeProduct(getvalues:FormGroup){

    if(getvalues.status==='VALID' ){
      
      this.loginserve.getUsername=getvalues.value.Username;
      this.loginserve.logincheck().subscribe(ele=> this.Uservalidate(getvalues.value.Username,getvalues.value.Password,ele))
     
      //this.route.navigate(['/ProductList'],{ queryParams: { user: getvalues.value.Username}})

    }
    
    else{
      this.ErrorMssg='Enter username and passowrd'
     // this.route.navigate(['/'])
    }

  }


private Uservalidate(username:string,password:string,res:{Username:string,Token:string,Password:string}[]){

res.forEach( ele => {

if(username===ele.Username && password===ele.Password){

  this.loginserve.setToken(ele.Token,ele.Username)
  this.route.navigateByUrl('/ProductList');
 
  return 
}
else{

this.ErrorMssg='Your username or password is incorrect'

}

})



}

}
