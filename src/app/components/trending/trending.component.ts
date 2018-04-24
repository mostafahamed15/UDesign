import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { PackageService } from '../../services/package.service';

import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
  providers: [NgbTabsetConfig]
})
export class TrendingComponent implements OnInit {
  public products:any[]=[];
  public category: object = {
    categories:[]
  };
  public package: any;
  constructor(private productService:ProductService,
    config: NgbTabsetConfig,
    public categoryService:CategoryService,
  public packageService:PackageService  ) { 
      config.justify = 'center';
      config.type = 'pills';
    this.productService.topProudcts().subscribe(res => {
      this.products = res['data'];
      // console.log(this.products);
    },err => console.log(err));
    this.categoryService.getTop().subscribe(res => {
      this.category = res['data'];
      console.log(this.category);
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