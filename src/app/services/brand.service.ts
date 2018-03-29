import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BrandService {

	constructor(public urlService:UrlService,public http: HttpClient) {}

	public index(){
		return this.http.get(this.urlService.getApiUrl()+'brands');
	}

	public get(data){
		return this.http.get(this.urlService.getApiUrl()+'brands', {params:data});
	}

	public show(id){
		return this.http.get(this.urlService.getApiUrl()+'brands/'+id);
	}

	public categories(id){
		return this.http.get(this.urlService.getApiUrl()+'brands/categories/'+id);
	}

	public packages(id){
		return this.http.get(this.urlService.getApiUrl()+'brands/packages/'+id);
	}

	public products(id){
		return this.http.get(this.urlService.getApiUrl()+'brands/products/'+id);
	}

}