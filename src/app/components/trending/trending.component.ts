import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
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