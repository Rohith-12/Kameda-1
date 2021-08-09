import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(products:{   Product:string,
    Code:string,
    Date:string,
    price:number,
    Rating:number}[],search:any) {

if(!products || !search){

  return products
}

return products.filter((ele:{   Product:string,
  Code:string,
  Date:string,
  price:number,
  Rating:number}) => ele.Product.toLowerCase().indexOf(search.toLowerCase())!==-1)

    
  }

}
