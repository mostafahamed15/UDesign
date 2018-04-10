import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import {HttpClient } from '@angular/common/http';
@Injectable()
export class FilterService {

  constructor(public urlService: UrlService ,
  public http:HttpClient ) { }
  filter(data){
    return this.http.post(this.urlService.getApiUrl() + 'filter', data);
  }
  getBrands(){
    return this.http.get(this.urlService.getApiUrl() + 'brand');
  }
  getCategories(){
    return this.http.get( this.urlService.getApiUrl() + 'categories');
  }
 getProducts(id){
   return this.http.get(this.urlService.getApiUrl()+ 'filter/products/' + id);
 }
getPackages(id){
  return this.http.get(this.urlService.getApiUrl() + 'filter/packages/' + id)
}
}
