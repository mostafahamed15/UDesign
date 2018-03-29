import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-new-featured-toprated',
  templateUrl: './new-featured-toprated.component.html',
  styleUrls: ['./new-featured-toprated.component.css']
})
export class NewFeaturedTopratedComponent implements OnInit {
  public products:ProductsResponse;
  constructor(private productService:ProductService) {
    this.productService.topProudcts().subscribe(res => {
      this.products = res['data']
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
