import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http, Response} from '@angular/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs/Rx';
import {CookieService} from 'ngx-cookie-service';
import { Subject } from 'rxjs/Subject';
import { ProductService } from './product.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class CartService {
  private cart:any;
  private submitting:boolean = false;
  private cart1: any;
  public count = 0;
  

	constructor(private storage: CookieService,private urlService:UrlService, private http:HttpClient) {

	}
	private cartSubject = new Subject<CartState>();
	Products : any[];
    CartState = this.cartSubject.asObservable();

	public getCart(){
		
		return new Observable(observer=>{
  
	
					this.http.get(this.urlService.getApiUrl()+'cart').subscribe(res=>{
						this.cart = res['data'];
						this.storage.delete('cart');
						this.storage.set('cart',JSON.stringify(this.cart));
						observer.next(this.cart)
						observer.complete();
					},err=>{
						observer.next(1)
						observer.complete();
					});
			});

		
	}


	public cartObject(){
		return this.cart;
	}

	public addToCart(product,color,size,qty){
		if(this.submitting){
			return;
		}
		return new Observable(observer=>{
			this.submitting = true;
			this.http.post(this.urlService.getApiUrl()+'cart',{
				product:product,
				color:color,
				size:size,
				qty:qty
			}).subscribe(res=>{
				this.cart = res['data'];
				this.storage.set('cart',JSON.stringify(this.cart));
				this.submitting = false;
				observer.next(1)
				observer.complete();
			},err=>{
				this.submitting = false;
				observer.next(1)
				observer.complete();
			});
		});
	}
	

	public remove(product,color,size){
		if(this.submitting){
			return;
		}
		return new Observable(observer=>{
			this.submitting = true;
			this.http.delete(this.urlService.getApiUrl()+'cart/'+product+'/'+color+'/'+size).subscribe(res=>{
				this.cart = res['data'];
				this.storage.set('cart',JSON.stringify(this.cart));
				this.submitting = false;
				observer.next(1)
				observer.complete();
			},err=>{
				this.submitting = false;
				observer.next(1)
				observer.complete();
			});
		});
	}

	//Adding Packages to Cart Functionality
	public addPackage(id){
		if(this.submitting){
			return;
		}
		return new Observable(observer=>{
			this.submitting = true;
			this.http.post(this.urlService.getApiUrl()+'cart/package',{
				id:id,
			}).subscribe(res=>{
				this.cart = res['data'];
				this.storage.set('cart',JSON.stringify(this.cart));
				this.submitting = false;
				observer.next(1)
				observer.complete();
			},err=>{
				this.submitting = false;
				observer.next(1)
				observer.complete();
			});
		});

	}

	public RemovePackageFromCart(user_id,package_id,price,quantity){
		if(this.submitting){
			return;
		}
		return new Observable(observer=>{
			this.submitting = true;
			this.http.delete(this.urlService.getApiUrl()+'cart/'+user_id+'/'+package_id+'/'+price+'/'+quantity).subscribe(res=>{
				this.cart = res['data'];
				this.storage.set('cart',JSON.stringify(this.cart));
				this.submitting = false;
				observer.next(1)
				observer.complete();
			},err=>{
				this.submitting = false;
				observer.next(1)
				observer.complete();
			});
		});

	}

	public getQty(product,color,size){
		if(!this.cart){
			return 0;
		}
		let quantity = 0;
		if(this.cart['products']){
			this.cart['products'].map(item=>{
				if(item['product_id'] == product.id && item['size_id'] == size.size_id && item['color_id'] == color.id){
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
			this.http.delete(this.urlService.getApiUrl()+'cart/package/'+id).subscribe(res=>{
				this.cart = res['data'];
				this.storage.set('cart',JSON.stringify(this.cart));
				this.submitting = false;
				observer.next(1)
				observer.complete();
			},err=>{
				this.submitting = false;
				observer.next(1)
				observer.complete();
			});
		});
	}

	public submit(data){
		return this.http.post(this.urlService.getApiUrl()+'order/submit', data)

  }
  addProduct(_product:any) {
      console.log('in service');
      this.Products.push(_product)
      this.cartSubject.next(<CartState>{loaded: true, products:  this.Products});
    }
    removeProduct(id:number) {
      this.Products = this.Products.filter((_item) =>  _item.id !== id )
      this.cartSubject.next(<CartState>{loaded: false , products:  this.Products});
    }

  getAllProducts() : Observable <any> {
    return this
      .http
      .get(this.urlService.getApiUrl()+'cart')
      .map((res : Response) => res.json())
      .catch((error : any) => Observable.throw('Server error'));
  }



}

export interface CartState {
	loaded: boolean;
	products : ProductService[];
   
   }