import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { CategoryService } from '../../services/category.service';
import { RouterModule, Router } from '@angular/router';
import { count } from 'rxjs/operators';
import { BrandService } from '../../services/brand.service';
import { FilterService } from '../../services/filter.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  sum = 1;
  throttle = 10;
  scrollDistance = 1;
  public hasMore:boolean=true;
  public last;
  
  public title;
	public keyword:string='';
  flag = false;
  public products:any[] =[];
  public product1:any[] =[];
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
    

//omars edits


   this.filterService.getCategories().subscribe((res)=>{
       let data:any[]=res['data']['categories'];
       data.map(item=>{
        item.checked = false;
        this.categories['categories'].push(item)
      });
    },err=>{

    });


    this.categoryService.getTop().subscribe(res => {
      this.categories = res['data'];
      console.log(this.categories);
    },err => console.log(err));
    this.brandService.get({}).subscribe(res => {
      this.brands = res['data']['brands'];
      console.log(this.brands);
    },err => console.log(err));
    this.filterService.getBrands().subscribe((res)=>{
       this.brandsfilter=res['data'];
      

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
this.filterService.getProducts('id').subscribe(res => {
  this.products = res['data']['products'];
  console.log(this.products);
},err => console.log(err));

  }

  getProducts(){
    this.productService.get({last:this.last}).subscribe((res)=>{
      
      if(res['data'] ['products'].length < 1){ this.hasMore = false}
      res['data'] ['products'].map((product)=>{
        this.products.push(product);
      });
    this.title = 'Products';
      this.last = res['data']['last'];
      console.log(this.last)

      console.log(this.products)
   });
   (err)=>{
      console.log(err)
   }

  }

 
   
  ngOnInit() {
   
  }
  
  
  toggleFilters(name,id){

    this.flag = true;
    for(let i =0 ; i<=5 ; i++){
      if(this.products[i].brand_id === id){
        this.product1[i] = this.products[i];
        
      // console.log(this.products[i]);
      
      }
    }
    console.log(this.product1);
    
   }
  
  product(id){
    this.router.navigateByUrl('product/' + id);
  }

 
 

}
interface ProductsResponse{
  top:any[];
  base_url:string;
}
