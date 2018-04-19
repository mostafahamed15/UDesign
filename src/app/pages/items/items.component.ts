import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { RouterModule, Router } from '@angular/router';
import { count } from 'rxjs/operators';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public products:any[] =[];
  public cartNumber: any;
  productName;
  color;
  size;
  qty;
  constructor( public productService:ProductService,
     public router:Router,
     public cartService: CartService ) {
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
