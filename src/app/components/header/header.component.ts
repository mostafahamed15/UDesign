import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLogged:boolean=false;
	public UserInfo = {};
  constructor(public router:Router,
		public modalService: NgbModal,
		public cookieService: CookieService,
		public auth: AuthService,) { }

  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(SigninComponent);
    modalRef.componentInstance.name = 'World';
  }
  
}
