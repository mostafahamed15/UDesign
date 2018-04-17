import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
id: any;
details: any;
  constructor( private route: ActivatedRoute,
  public product: ProductService) { 
    this.route.params.subscribe(params=>{
      if(params['id']){
          this.id = params['id'];
          this.getDetails();
      }
  });
}
  getDetails(){
console.log(this.id)
    this.product.show(this.id).subscribe((res)=>{

        this.details = res['data']['product'];
        console.log(this.details);
    },(err)=>{

        console.log(err)
    }
)};
}
  

