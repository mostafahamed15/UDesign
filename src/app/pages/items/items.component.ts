import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public products:any[] =[];
  constructor( public productService:ProductService, public router:Router ) {
    this.productService.index().subscribe(res => {
      this.products = res['data']['products'];
      console.log(this.products)
    },err => console.log(err));
   }

  ngOnInit() {
  }
  product(id){
    this.router.navigateByUrl('product/' + id);
  }

}
interface ProductsResponse{
  top:any[];
  base_url:string;
}
