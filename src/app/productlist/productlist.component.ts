import { Component, OnInit } from '@angular/core';
import {GetproductsService} from "../services/getproducts.service";
import {Router} from "@angular/router";
import { ActivatedRoute, Event } from "@angular/router"
import {Product}from "../Models/Product.model"
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
getuser:string=''
searchTerm:string=''
  constructor(private getproservice:GetproductsService,private route:Router) { 

  }
asyncdata:Product[]=[]
  ngOnInit(): void {
    
    this.getpro();
    
  }


  private getpro(){
this.getproservice.getproducts().subscribe((ele) => {

  this.asyncdata=ele

  
})

  }

    navigateedit(getproduct:Product){

    //console.log(getproduct);
    this.route.navigate(['/Editprodcut'],{ queryParams:{id:getproduct.Code}})
 

}
}