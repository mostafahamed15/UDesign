import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { TryPremiumComponent } from './try-premium/try-premium.component';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
user: any;
cookieinfo;
userinfo;
public likes:any[] = [];
public wishes:any[] = [];
  constructor(public userService: UserService,
    public modalService: NgbModal,
  public cookieService: CookieService) { 
    this.cookieinfo  = this.cookieService.get('token');
    this.userinfo = this.cookieService.get('user');
    this.userService.getLikes().subscribe((res:any[])=>{
      this.likes = res;
      
      // console.log(this.likes)
    });
    this.userService.getWishList().subscribe((res:any[])=>{
      this.wishes = res;
      
      // console.log(this.wishes)
  	});
    
    if (this.cookieinfo){ 
      this.userinfo = JSON.parse(this.userinfo)

      console.log(this.userinfo)
    }

  }

  // open() {
  //   const modalRef = this.modalService.open(TryPremiumComponent);
  //   modalRef.componentInstance.name = 'World';
  // }
  ngOnInit() {
  }

}
