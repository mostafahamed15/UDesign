import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FinishingService {

  constructor(public urlService:UrlService,
    public http: HttpClient ) { }
    public index(data){
      return this.http.get(this.urlService.getApiUrl()+ 'finishing_offices', {params: data})
    }
    public get(){
     return this.http.get(this.urlService.getApiUrl()+ 'finishing_offices')
   }
   public show(id){
     return this.http.get(this.urlService.getApiUrl()+ 'finishing_offices/', id)
   }


}
