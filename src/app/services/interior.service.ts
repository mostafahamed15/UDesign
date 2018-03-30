import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InteriorService {

  constructor(public urlService:UrlService,
     public http: HttpClient ) { }
     public index(data){
       return this.http.get(this.urlService.getApiUrl()+ 'interior_office', {params: data})
     }
     public get(){
      return this.http.get(this.urlService.getApiUrl()+ 'interior_office')
    }
    public show(id){
      return this.http.get(this.urlService.getApiUrl()+ 'interior_office/', id)
    }

}
