import { Injectable } from '@angular/core';


@Injectable()
export class UrlService {

	private baseUrl:string;
	private apiUrl:string;

	constructor() {

		this.baseUrl = 'https://ops.u-designapp.com/';
		this.apiUrl = 'https://ops.u-designapp.com/api/v1/';
	}

	getUrl(){
		return this.baseUrl;
	}

	getApiUrl(){
		return this.apiUrl;
	}

}