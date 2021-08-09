import { Component,OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  constructor(private login:LoginService){}
  title = 'Acme';
  Loggied:boolean=false
  ngOnInit(){
    console.log('hi')
    this.Loggied=this.login.isLoggedin();
  }
 
}
