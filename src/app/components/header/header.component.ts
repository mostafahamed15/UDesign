import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { UserService } from '../../services/user.service';
import { SigninComponent } from './signin/signin.component';
import { count } from 'rxjs/operators';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLogged:boolean=false;
  public user:object=null;
  public cartNumber: any;
  productName;
  color;
  size;
  qty;
  constructor(public router:Router,
		public modalService: NgbModal,
		public cookieService: CookieService,
    public auth: AuthService,
    public userService:UserService,
    public cartService: CartService
  ){
      let token = this.cookieService.get('token');

      if (token && token !== 'undefined'){
        this.loadProfile();
      }else{
        this.user = null;
      }
    
     }
  
     loadProfile(){
      let user = this.cookieService.get('user');
      user && user !== 'undefined'? this.user = JSON.parse(user) : this.user = null;
      console.log('loadProfile',this.user);
     }
  ngOnInit() {
    this.userService.reloadProfile.subscribe(res=>{
      this.loadProfile();
    });
  }
  cart(count: number){
    this.cartNumber = this.cartService.count;
  }
  open() {
    const modalRef = this.modalService.open(SigninComponent);
    modalRef.componentInstance.name = 'World';
  }
  logout(){
   this.cookieService.delete('token');
   this.cookieService.delete('user');
   this.userService.reloadProfile.emit(true);
  }
  
}
