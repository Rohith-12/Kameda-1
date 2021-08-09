import { AfterViewInit, Component, OnInit ,DoCheck,AfterContentChecked,OnChanges} from '@angular/core';

import { ActivatedRoute, Event,Router } from "@angular/router";
import { Observable } from 'rxjs';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{



LoginStatus!: Observable<boolean>;

UserName!: Observable<string |null > ;

  constructor(private login:LoginService,private route:Router) {
   }

  ngOnInit(): void {
    
    this.LoginStatus=this.login.isloggesIn;
    this.UserName=this.login.currentUserName;
    //console.log(this.UserName);


  }


  logout(){
    //console.log('hello')
    this.route.navigate(['/']);
    this.login.logout();
  }

}
