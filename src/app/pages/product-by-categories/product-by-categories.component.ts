import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-by-categories',
  templateUrl: './product-by-categories.component.html',
  styleUrls: ['./product-by-categories.component.css']
})
export class ProductByCategoriesComponent implements OnInit {
private last: number = 0;
private hasMore:boolean = true;
public products:any[]=[];
  public title:string=null;
  id
  public nid: number;
  constructor( public productService: ProductService,
  
                public categoryService: CategoryService,
                public route:ActivatedRoute,
                public router: Router,

  ) {




    this.id  = this.route.params.subscribe(params => {
      // Defaults to 0 if no query param provided.
      
      this.id = params['id'] || 0;
      this.nid = this.id;
      console.log(this.id);
    });
  
    if(this.nid!= null){
      this.categoryService.products(this.nid).subscribe(res=>{
      this.products = res['data'];
      console.log(this.products);
    },err=>{
    
    });
    }
  


   }
   product(id){
    this.router.navigateByUrl('product/' + id);
  }
  ngOnInit() {
  }
  // getProducts(e){
  //   this.productService.get({last:this.last}).subscribe((res)=>{
  //     if(e){e.complete()}
  //     if(res['data'] ['products'].length < 1){ this.hasMore = false}
  //     res['data'] ['products'].map((product)=>{
  //       this.products.push(product);
  //     });
  //   this.title = 'Products';
  //     this.last = res['data']['last'];
  //  },(err)=>{
  //    if(e){e.complete()}
  //  });


 //}



}
