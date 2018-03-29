import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

	constructor(public urlService:UrlService,public http: HttpClient) {}

	public signin(data){
		return this.http.post(this.urlService.getApiUrl()+'login',data);
	}

	public signup(data){
		return this.http.post(this.urlService.getApiUrl()+'register',data);
	}
		public socialLogin(data){
		return this.http.post(this.urlService.getApiUrl()+'social/login',data);
	}

	public forgotpassword(){
		
	}


	// public isLogged(){
	// 	if(this.cookieService.get('user-profile')){
	// 		return true;
	// 	}
	// 	return false;
	// }



}