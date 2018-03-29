import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommonService {

	constructor(public urlService:UrlService,public http: HttpClient){}
	store(){
		return this.http.get(this.urlService.getApiUrl()+'store');
	}
	about(){
		return this.http.get(this.urlService.getApiUrl()+'about');
	}
}