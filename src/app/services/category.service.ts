import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {

	constructor(public urlService:UrlService,public http: HttpClient){}

	public getTop(){
		return this.http.get(this.urlService.getApiUrl()+'categories/top');
	}

	public get(data){
		return this.http.get(this.urlService.getApiUrl()+'categories', {params:data});
	}

	public products(id){
		return this.http.get(this.urlService.getApiUrl()+'categories/products/'+id);
	}

	public brandProducts(id,brand){
		return this.http.get(this.urlService.getApiUrl()+'categories/brand/products/'+id+'/'+brand);
	}

}