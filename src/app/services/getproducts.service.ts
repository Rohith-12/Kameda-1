import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http"
import { Observable } from 'rxjs';
import {Product}from "../Models/Product.model"

@Injectable({
  providedIn: 'root'
})
export class GetproductsService {

  constructor(private http:HttpClient) { }

  private url='../../assets/productList.json'

getproducts():Observable<Product[]>{

  return this.http.get<Product[]>(this.url)

}


}
