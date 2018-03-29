import { Injectable } from '@angular/core';
import { UrlService } from '../../app/services/url.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SlidesService {

	constructor(public urlService:UrlService,public http: HttpClient) {}

	public get(){
		return this.http.get(this.urlService.getApiUrl()+'advertisments');
	}

	public questions(){
		return this.http.get(this.urlService.getApiUrl()+'questions');
	}
}