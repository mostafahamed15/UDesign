import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public products:any;
  constructor( public productService:ProductService ) {
    this.productService.index().subscribe(res => {
      this.products = res['data']['products'];
      console.log(this.products)
    },err => console.log(err));
   }

  ngOnInit() {
  }

}
interface ProductsResponse{
  top:any[];
  base_url:string;
}
