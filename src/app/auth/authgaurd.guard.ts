import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from '../services/login.service';
import {Router} from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdGuard implements CanActivate {
  constructor(private login:LoginService,private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

if(!this.login.isLoggedin()){
console.log("hello")
  this.route.navigateByUrl('/');
  this.login.deleteToken();

return false
}
return true
  }
  
}
