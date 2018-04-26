import { Injectable, EventEmitter } from '@angular/core';
import { UrlService } from './url.service';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
  public reloadProfile:EventEmitter<boolean> = new EventEmitter<boolean>();

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
  public uploadProfilePicture(data){
		return this.http.post(this.UrlService.getApiUrl()+'profile/picture',data);
  }
  public uploadCoverPhoto(data){
		return this.http.post(this.UrlService.getApiUrl()+'profile/cover',data);
	}
  public getFileUrl(event:any){
    return new Observable(observe=>{
      let url = null;
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (event:any) => {
          url = event.target.result;
          observe.next(url);
          observe.complete();

        }
        reader.readAsDataURL(event.target.files[0]);
      }else{
        console.log(url);
        observe.error(url);
        observe.complete();
      }
    });
  }

}
