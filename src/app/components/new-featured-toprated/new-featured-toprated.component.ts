import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { PackageService } from '../../services/package.service';

import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-featured-toprated',
  templateUrl: './new-featured-toprated.component.html',
  styleUrls: ['./new-featured-toprated.component.css']
})
export class NewFeaturedTopratedComponent implements OnInit {
  public products:any[]=[];
  public category: object = {
    categories:[]
  };
  public package: any;
  
  constructor(private productService:ProductService,
    config: NgbTabsetConfig,
    public categoryService:CategoryService,
  public packageService:PackageService ) {
    config.justify = 'center';
      config.type = 'pills';
    this.productService.topProudcts().subscribe(res => {
      this.products = res['data']
      console.log(this.products)
    },err => console.log(err));
    this.categoryService.get('data').subscribe(res => {
      this.category = res['data'];
      // console.log(this.category);
    },err => console.log(err));
    this.packageService.topPackages().subscribe(res => {
      this.package = res['data'];
      console.log('this is what i want',this.package);
    },err => console.log(err));
   }

  ngOnInit() {
  }

}
interface ProductsResponse{
  top:any[];
  base_url:string;
}
