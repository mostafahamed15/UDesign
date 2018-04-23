import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CartService } from '../../services/cart.service';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent  {

  user: any;
  cookieinfo;
  userinfo;
  public carts:any;
  product;
  color;
  size;
  qty;
  counter=0;
  cart;
    constructor(public cartService: CartService,
      public modalService: NgbModal,
    public cookieService: CookieService) { 
      this.cookieinfo  = this.cookieService.get('token');
      this.userinfo = this.cookieService.get('cart');
    

      this.cartService.addToCart(this.product,this.color,this.size,this.qty).subscribe((res:any[])=>{
        this.carts = res;
       
      console.log(this.carts);
      console.log(this.userinfo);
      });
     
      
      if (this.cookieinfo){ 
        this.userinfo = JSON.parse(this.userinfo);
  
        console.log(this.userinfo);
      }
  
    }
  
    // open() {
    //   const modalRef = this.modalService.open(TryPremiumComponent);
    //   modalRef.componentInstance.name = 'World';
    // }
    ngOnInit() {
    }
    PlusCounter(){
      console.log(this.counter);
      this.counter+=1
    }
    MinusCounter(){
      console.log(this.counter);
      this.counter-=1
    }
  }
  