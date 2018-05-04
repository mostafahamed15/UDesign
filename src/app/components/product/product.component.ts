import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductService } from '../../services/product.service';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

public nid:number;
private id:any;
private response:ProductResponse;
public product:object;
private currentSize:number;
private currentColor:number;
public counter:number = 1;
public size: any;
constructor(
  private productService:ProductService,
  private cartService:CartService,
  private route: ActivatedRoute,
  ){
  this.currentSize = 0;
  this.currentColor = 0;
  this.product = {
    is_wish:false,
    likes:0,
    likes_it:false,
    name:'',
    featured_image:'',
    description:'',
    rating:0,
    ratings:0,
    reviews:0,
    sizes:[],
    colors:[],
    all_sizes:[]
  }


    this.id  = this.route.params.subscribe(params => {
      // Defaults to 0 if no query param provided.
      
      this.id = params['id'] || 0;
      this.nid = this.id;
      console.log(this.nid);
    });
  if(this.id!=null){
    this.productService.show(this.nid).subscribe(res=>{
       this.product = res['data']['product'];
       this.size = res['data']['product']['all_sizes']['0'];

    console.log("hhhhhhhhhhhhhhhh", this.product);
    });
    this.cartService.getCart().subscribe(res=>{
      this.counter = this.getQty();
    });
  }
  this.PlusCounter();
  this.MinusCounter();
}
public addToWishList(id){
  this.productService.addToWishList(id).subscribe(res=>{
    this.product['is_wish'] = res['data'];
  });
}

public count(qty) {
  let quantity = this.product['all_sizes'][0].quantity
  console.log(quantity);
  let sum:number = qty + this.counter;
  if(sum <= quantity){
    this.counter = sum;
    return;
  }else{
    this.counter = 0;
  }
}

public addToCart(){
  console.log("Counter: " ,this.counter)
  let product = this.product['id'];
  let size = this.product['all_sizes'][this.currentSize].size_id;
  let color = this.product['colors'][this.currentColor]?this.product['colors'][this.currentColor].id:0;
  this.cartService.addToCart(product,
    color,
    size,this.counter).subscribe(res=>{
      this.counter+=1
    });
    console.log("Product : ",this.product[this.id]);
    // console.log("Size : ",size);
    // console.log("Color: ",color);
    // console.log("Counter : ",this.counter);
}
public remove(){
  let product = this.product['id'];
  let size = this.product['all_sizes'][this.currentSize].size_id;
  let color = this.product['colors'][this.currentColor]?this.product['colors'][this.currentColor].id:0;
  this.cartService.remove(product,
    color,
    size).subscribe(res=>{
      this.counter = this.getQty();
    });
}

public getQty(){
  if(!this.product || !this.product['colors'][this.currentColor]){
    return 0;
  }
  return this.cartService.getQty(this.product,
    this.product['colors'][this.currentColor]?this.product['colors'][this.currentColor]:0,
    this.product['all_sizes'][this.currentSize]);
}

public share(id){

}

public showDimensions(size,index){
   this.currentSize = index;
    this.counter = this.getQty();
}
  
PlusCounter(){
  console.log(this.counter);
  this.counter+=1
}
MinusCounter(){
  console.log(this.counter);
  this.counter-=1
}

public showColors(index){
  this.currentColor = index;
  this.counter = this.getQty();
  let slides = [];
  for(let i = 1; i<= 5; i++){
     this.product['colors'][index]['ximage'+i]?slides.push(this.product['colors'][index]['ximage'+i]):'';
  }
  
}


private like(id){
  this.productService.like(id).subscribe(res=>{
    this.product['likes_it'] = res['data'];
    res['data']? this.product['likes']+=res['data'] : this.product['likes']-=1;
  });
}

 

}
interface ProductResponse{
product:object;
assets_url:string;
} 

