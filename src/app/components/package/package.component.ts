import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../services/package.service'
import { ProductService } from '../../services/product.service';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
packages: any;

  constructor(public packageService: PackageService,
  public router: Router,
  public productService: ProductService) { 
    this.packageService.get({}).subscribe((res)=>{
      this.packages = res['data'];
      console.log(this.packages);
   });
  }
  product(id){
    this.router.navigateByUrl('product/' + id);
  }
  ngOnInit() {
  }

}
