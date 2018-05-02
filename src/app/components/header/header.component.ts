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
  
  cookieinfo;
  public shoppingCart;
  public carts:any;
  product;
  public cartLast: any ;
  
  counter=0;
  constructor(public router:Router,
		public modalService: NgbModal,
		public cookieService: CookieService,
    public auth: AuthService,
    public userService:UserService,
    public cartService: CartService
  ){
    this.fetchCart();
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
      console.log(this.cartLast);
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