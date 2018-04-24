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
export class ShoppingCartComponent implements OnInit {

  user: any;
  cookieinfo;
  public shoppingCart;
  public carts:any;
  product;
  color;
  size;
  qty;
  counter=0;
 public cartLast: any ;
    constructor(public cartService: CartService,
      public modalService: NgbModal,
      public cookieService: CookieService
    ){
    
      this.fetchCart();
    }

    fetchCart(){
      this.cartService.getCart().subscribe((res: ShoppingCart)=>{
        // console.log(res);
        this.shoppingCart = res.products;
        
        console.log('shoppingCart',this.shoppingCart)
      });
    }
  
    // open() {
    //   const modalRef = this.modalService.open(TryPremiumComponent);
    //   modalRef.componentInstance.name = 'World';
    // }
    ngOnInit() {
      console.log(this.cartLast);


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

  interface ShoppingCart{
    products:Products[]
  }

  interface Products{
    brand_id:number
  }