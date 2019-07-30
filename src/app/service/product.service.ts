import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
   return  this.http.get("http://localhost:1234/all")
  }

  getProductById(productid){
    return this.http.get("http://localhost:1234/all/" + productid)
  }

  updateProductById(id, product){
    return this.http.put("http://localhost:1234/all/update/"+id, product )
  }

  deleteProductById(productid){
    return this.http.delete("http://localhost:1234/delete/" + productid)
  }

  createProduct(product){
    return this.http.post("http://dummy.restapiexample.com/api/v1/create", product)
  }


}
