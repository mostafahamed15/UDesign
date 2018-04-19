import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../../services/package.service'
import { ProductService } from '../../../services/product.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-package-with-product',
  templateUrl: './package-with-product.component.html',
  styleUrls: ['./package-with-product.component.css']
})
export class PackageWithProductComponent implements OnInit {

public packages: any;
public nid: number;
public id: any;
public products: any[]=[];
public size: any;
  constructor(public packageService: PackageService,
    public productService: ProductService,
    public route: ActivatedRoute,
    public router: Router) {
      this.id  = this.route.params.subscribe(params => {
        // Defaults to 0 if no query param provided.
        
        this.id = params['id'] || 0;
        this.nid = this.id;
        console.log(this.nid);
      });
    if(this.nid!=null){
      this.productService.show(this.nid).subscribe(res=>{
         this.products = res['data']['product'];
         this.size = res['data']['product']['all_sizes']['0'];
  
      console.log("hhhhhhhhhhhhhhhh", this.products);
      });
  this.packageService.show(this.nid).subscribe((res)=>{
    this.packages = res['data'];
    console.log(this.packages);
 });
}
 }
 product(id){
  this.router.navigateByUrl('product/' + id);
}
  ngOnInit() {
  }

}
