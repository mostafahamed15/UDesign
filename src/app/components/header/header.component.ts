import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { SigninComponent } from './signin/signin.component';
import { count } from 'rxjs/operators';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLogged:boolean=false;
  public UserInfo = {};
  public userName;
  public cartNumber: any;
  productName;
  color;
  size;
  qty;
  constructor(public router:Router,
		public modalService: NgbModal,
		public cookieService: CookieService,
    public auth: AuthService,
  public cartService: CartService) {
      this.UserInfo = this.cookieService.get('token');

      if (this.UserInfo){
        this.userName = this.cookieService.get('user');

        this.userName = JSON.parse(this.userName)
        console.log (this.userName);
      }
    
     }

  ngOnInit() {
  }
  cart(count: number){
    this.cartNumber = this.cartService.count;
  }
  open() {
    const modalRef = this.modalService.open(SigninComponent);
    modalRef.componentInstance.name = 'World';
  }
  logout(){
   this.cookieService.deleteAll();
  }
  
}
