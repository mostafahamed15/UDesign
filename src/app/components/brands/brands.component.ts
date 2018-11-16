import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand.service';
import { SlickModule } from 'ngx-slick';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {

  public brands:any[]=[];
  public title:string=null
  private last:number = 0;
  private hasMore:boolean = true;
    slideConfig = {'slidesToShow': 4, 'slidesToScroll': 1, autoplay: true, autoplaySpeed: 1000};


  constructor( public  brandService: BrandService) {

    	this.getBrands();
 }

  getBrands(){
    this.brandService.get({last:this.last}).subscribe((res)=>{
      console.log('brands', res)
      res['data']['brands'].map((brand)=>{
        this.brands.push(brand)
      });
    },
    (err)=>{
      console.log('brands err', err)
    });
  }


}