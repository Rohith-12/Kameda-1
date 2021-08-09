import { EventEmitter, Injectable, Output } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http"

import { BehaviorSubject, Observable } from 'rxjs';
import {User} from "../Models/User.model"

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   private loginStatus = new BehaviorSubject<boolean>(this.isLoggedin());
   private UserName   = new BehaviorSubject<string | null>(localStorage.getItem('username'));
  constructor(private http:HttpClient) { }
  
  private url='../../assets/user.json'


getUsername:String=''
   getlogindetails():String | undefined{


   return this.getUsername

  }


logincheck(){

return this.http.get<User[]>(this.url)

}

setToken(token:string,username:string){
  this.loginStatus.next(true);

localStorage.setItem('username', username);
localStorage.setItem('token',token);
this.UserName.next(localStorage.getItem('username'));


}

deleteToken(){

  localStorage.removeItem('token')
}



getuserpayload(){

let tok=localStorage.getItem('token');

if(tok){
  
  let userpayload=atob(tok.split('.')[1]);
  return JSON.parse(userpayload)
}
else{
  return null
}

}


isLoggedin(){

  let userpay=this.getuserpayload();
  if(userpay){

    return userpay.exp > Date.now() / 1000;

  }
  else{

    return false;
  }
}

get isloggesIn(){

  return this.loginStatus.asObservable()
}

get currentUserName()
    {
        return this.UserName.asObservable();
    }






    logout() 
    {
      console.log('hello')
        // Set Loginstatus to false and delete saved jwt cookie
        this.loginStatus.next(false);
      
        localStorage.removeItem('username');
        localStorage.removeItem('token');
       
        
        //this.router.navigate(['/login']);
        

    } 
}
