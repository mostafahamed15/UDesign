import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { HttpClient } from '@angular/common/http'
@Injectable()
export class UserService {

  constructor(private UrlService: UrlService,
  private http:HttpClient ) { }
  getProfile(){
    return this.http.get(this.UrlService.getApiUrl() + 'profile');
  }
  getWishList(){
    return this.http.get(this.UrlService.getApiUrl() + 'wishlist');
  }
  getLikes(){
    return this.http.get(this.UrlService.getApiUrl() + 'likes');
  }
  public postedits(data){
    return this.http.post(this.UrlService.getApiUrl() + 'update', data);
  }
  public changepasswordnow(data){
    return this.http.post(this.UrlService.getApiUrl() + 'password', data);
  }

}
