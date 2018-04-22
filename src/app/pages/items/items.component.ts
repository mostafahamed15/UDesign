import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { CategoryService } from '../../services/category.service';
import { RouterModule, Router } from '@angular/router';
import { count } from 'rxjs/operators';
import { BrandService } from '../../services/brand.service';
import { FilterService } from '../../services/filter.service';
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
  filter;
  public brandsfilter: any;
  public categoriesfilter: any;
  public categories: any[] = [];
  public brands: any[] =[];
  public last: any;
  filters:object = {
    brands:[],
    prices:[],
    colors:[],
    categories:[],
  };
  constructor( public productService:ProductService,
     public router:Router,
     public cartService: CartService,
    public categoryService: CategoryService,
  public brandService: BrandService,
  public filterService:FilterService ) {
    this.productService.index().subscribe(res => {
      this.products = res['data']['products'];
      console.log(this.products)
    },err => console.log(err));
    this.categoryService.getTop().subscribe(res => {
      this.categories = res['data'];
      console.log(this.categories);
    },err => console.log(err));
    this.brandService.get({}).subscribe(res => {
      this.brands = res['data']['brands'];
      console.log(this.brands);
    },err => console.log(err));
    this.filterService.getBrands().subscribe((res)=>{
       this.brandsfilter=res['data']['brands'];
      

       console.log(this.brandsfilter);
      
    },err => console.log(err));

   this.filterService.getCategories().subscribe((res)=>{
        this.categoriesfilter = res['data']['categories'];
        
        console.log(this.categories);
     
   },err => console.log(err));
   this.filterService.filter('data').subscribe((res)=>{
    this.filter = res['data'];
    
    console.log(this.filter);
 
},err => console.log(err));

  }

    
   
  ngOnInit() {
   
  }
  
  
  toggleFilters(name,id){
    let index = this.filters[name].indexOf(id);
    if(index === -1){
      this.filters[name].push(id);
      console.log('added '+name, this.filters[name])
      return;
    }
    this.filters[name].splice(index,1);
    console.log('removed '+name,this.filters[name])
 
 
   }

  product(id){
    this.router.navigateByUrl('product/' + id);
  }
 

}
interface ProductsResponse{
  top:any[];
  base_url:string;
}
