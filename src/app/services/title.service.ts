import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CookieService} from 'ngx-cookie-service';
import {Title} from '@angular/platform-browser';

@Injectable()
export class TitleService{
   constructor(
		private cookieService:CookieService,
		private translate:TranslateService,
		public titleService: Title
   	){

	this.translate.addLangs(['en','ar'])
	this.translate.setDefaultLang('en');
		let lang = this.cookieService.get('lang');
		if(!lang){
			lang = 'en';
			this.cookieService.set('lang',lang);
		}
		this.translate.use(lang);
	}

    public setTitle( title: string) {
    	this.translate.get(title).subscribe((newTitle: string)=>{
		    this.translate.get('PAGE_TITLE',{value: newTitle}).subscribe((res: string) => {
		        this.titleService.setTitle(res);
		    });
	    });
  	}
}