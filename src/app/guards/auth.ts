import{Injectable} from '@angular/core';
import{Router} from '@angular/router';
import {CanActivate} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(public cookieService:CookieService, public router:Router){

	}
	canActivate() {
		let token = this.cookieService.get('token');
		if(token && token !== 'undefined'){
			return true;
		}
		this.router.navigateByUrl('/');
		return false;
	}
}
