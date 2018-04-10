import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs/observable';
@Injectable()
export class CartService {
 private cart: any;
 private submitting:boolean = false;
  constructor( private urlService:UrlService,
  private http: HttpClient ) { }
  public cartObject(){
    return this.cart;
  }
  public addToCart(product, color, size, qty){
    if(this.submitting){
      return;
    }
    return new Observable(observer =>{
      this.submitting = true;
      this.http.post(this.urlService.getApiUrl() + 'cart',{
        product:product,
        color:color,
        size:size,
        qty:qty
      }).subscribe(res=>{
        this.cart = res['data'];
        this.submitting = false;
        observer.next(1);
        observer.complete();

      }, err=>{
        this.submitting = false;
        observer.next(1);
        observer.complete();
      });
    });
  }
  public remove(product, color, size){
    if(this.submitting){
      return;
    }
    return new Observable(observer=>{
      this.submitting = true;
      this.http.delete(this.urlService.getApiUrl() + 'cart/' + product + '/' + size).subscribe(res=>{
        this.cart = res['data'];
        this.submitting = false;
        observer.next(1);
        observer.complete();
      }, err=>{
        this.submitting = false;
        observer.next(1);
        observer.complete();
      });
    });
  }
  public addPackage(id){
    if(this.submitting){
      return;
    }
    return new Observable(observer =>{
      this.submitting = true;
      this.http.post(this.urlService.getApiUrl() + 'cart/package',{
        id:id,
      }).subscribe(res=>{
        this.cart = res['data'];
        this.submitting = false;
        observer.next(1);
        observer.complete();
      },err=>{
        this.submitting = false;
        observer.next(1);
        observer.complete();
      });
    });
  }
  public removePackageFromCart(user_id,package_id, price, quantity){
    if(this.submitting){
      return;
    }
    return new Observable(observer=>{
      this.submitting = true;
      this.http.delete(this.urlService.getApiUrl() + 'cart/' + user_id + '/' + package_id + '/' + price + '/' + quantity).subscribe(res=>{
        this.cart = res['data'];
        this.submitting = false;
        observer.next(1);
        observer.complete()
      }, err=>{
        this.submitting = false;
        observer.next(1);
        observer.complete()
      });
    });
  }
  public getQty(product, color, size){
    if(!this.cart){
      return 0;
    }
    let quantity = 0;
    if(this.cart['products']){
      this.cart['products'].map(item=>{
        if(item['product_id'] == product.id && item['size_id'] == size.size_id && item['color_id'] == color.id ){
          quantity = item.quantity;
        }
      });
    }
    return quantity;
  }
  public getTotalCount(){
    if(!this.cart){
      return 0;
    }
    return this.cart.productsCount + this.cart.packagesCount;
  }
  public removePackage(id){
    if(this.submitting){
      return;
    }
    return new Observable(observer=>{
      this.submitting = true;
      this.http.delete(this.urlService.getApiUrl() + 'cart/package/' + id).subscribe(res=>{
        this.cart = res['data'];
        this.submitting = false;
        observer.next(1);
        observer.complete();
      }, err=>{
        this.submitting = false;
        observer.next(1);
        observer.complete();
      });
    });
  
  }
  public submit(data){
    return this.http.post(this.urlService.getApiUrl() + 'order/submit', data);
  }


}
