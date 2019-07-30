import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  newProduct:any = {}
  allProducts:any

  constructor(private proService: ProductService ) { }

  getAllProducts = function(){
    this.proService.getAllProducts().subscribe((response) => {
      console.log(response);
      console.log("Length: " + Object.keys(response).length)
      this.allProducts = response
    })
  }

  ngOnInit() {
    this.getAllProducts()
  }

  viewProduct = function(selectedProduct){
    this.selected = this.allEmployees[selectedProduct].id
    this.empService.getEmployeeById(this.selected).subscribe((response)=>{
      console.log(response);
      this.selectedProduct = response.product_name
    })
  }



}
