import { Component, OnInit } from '@angular/core';

import {GetproductsService} from "../services/getproducts.service";


import { ActivatedRoute, Event } from "@angular/router";
import {Product}from "../Models/Product.model"

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
getProductId:string=''
displayarr:Product={Product:'',Code:'',Date:'',price:0,Rating:0}
  constructor(private getproservice:GetproductsService,private activatedroute:ActivatedRoute) {

    activatedroute.queryParams.subscribe(params => {
 
      console.log(params)
      this.getProductId=params.id
      
      
    })


   }

  ngOnInit(): void {
    console.log("hello");
    this. getprod()
  }

private getprod(){

  this.getproservice.getproducts().subscribe(ele => this.serachPro(ele))
}


private serachPro(response:Product[]){


response.forEach((ele:any) => {

  if(this.getProductId===ele.Code){
this.displayarr=ele
  }

})

console.log(this.displayarr)

}



}


