import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

	constructor(public urlService:UrlService,public http: HttpClient){}
	public get(data){
		return this.http.get(this.urlService.getApiUrl()+'products', {params:data});
	}
	public index(){
		return this.http.get(this.urlService.getApiUrl()+'products');
	}
	public topProudcts(){
		return this.http.get(this.urlService.getApiUrl()+'products/top');
	}
	public show(id){
		return this.http.get(this.urlService.getApiUrl()+'products/'+id);
	}
	public addToWishList(id){
		return this.http.get(this.urlService.getApiUrl()+'products/wishlist/'+id);
	}
	public like(id){
		return this.http.get(this.urlService.getApiUrl()+'products/like/'+id);
	}
}