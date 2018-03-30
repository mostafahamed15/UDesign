import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AdsService {
    constructor(public urlService:UrlService,
    public http: HttpClient ){}
    public index(){
        return this.http.get(this.urlService.getApiUrl()+ 'advertisments');
    }
    public get(){
        return this.http.get(this.urlService.getApiUrl()+ 'advertisments');
    }
    public show(id){
        return this.http.get(this.urlService.getApiUrl()+ 'advertisments/' + id);
    }
}