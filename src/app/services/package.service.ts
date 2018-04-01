import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class PackageService {

  constructor( public UrlService: UrlService,
  public http:HttpClient ) {}
 public topPackages(){
   return this.http.get(this.UrlService.getApiUrl() + 'packages/top');
 }
  public get(data){
    return this.http.get(this.UrlService.getApiUrl() + 'packages', {params:data});
  }
  public show(id){
    return this.http.get(this.UrlService.getApiUrl() + 'packages/' + id);
  }

}
