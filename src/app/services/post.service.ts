import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService {

	constructor(public urlService:UrlService,public http: HttpClient) {}

	public topPosts(){
		return this.http.get(this.urlService.getApiUrl()+'posts/top');
	}

	public index(){
		return this.http.get(this.urlService.getApiUrl()+'posts');
	}

	public show(id){
		return this.http.get(this.urlService.getApiUrl()+'posts/'+id);
	}

}