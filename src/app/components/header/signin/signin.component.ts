import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CookieService} from 'ngx-cookie-service';
import {AuthService} from '../../../services/auth.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';




@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  
  show: boolean = true;

  public alerts: Array<IAlert> = [];

private backup: Array<IAlert> = [];
public creds: FormGroup;
morefalse=true;
public signupuser: FormGroup;
public errors:object = {
name:'',
email:'',
phone:'',
password:'',
password_confirmation:'',

};
public loginErrors:loginErrors = {
message:null
};

public message: Array<any>;
public email:any;
public errormessage:any;
public form:FormGroup;

  constructor(public activeModal: NgbActiveModal,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              public cookieService: CookieService,
              public router:Router,
		public modalService: NgbModal,
		public auth: AuthService,
  ) { 
    
    
    this.creds = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]],
      });


      this.signupuser = this.formBuilder.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required,Validators.email]],
        password: ['',[Validators.required,Validators.minLength(6)]],
        c_password: ['',[Validators.required]],
        phone: ['', [Validators.required]],
        code: ['', []],

        });
      }
  signup(){
    console.log(this.alerts)
        this.authService.signup(this.signupuser.value).subscribe((res)=>{
          console.log(this.signupuser.value)

  });}


        
      login(){
        console.log(this.alerts)
        this.authService.signin(this.creds.value).subscribe((res)=>{
          console.log(this.creds.value)
        this.cookieService.set('token',res['success'].token);
        this.cookieService.set('lang','en');
        this.cookieService.set('user',JSON.stringify(res['user']));
        this.activeModal.close();
        console.log(res);},(err)=>{
        if(err.status == 401){
        if(parseInt(err['error'].code) === 1){
        this.loginErrors['message'] = 'Incorrect username or password'
        console.log(this.message)
        }else if(parseInt(err['error'].code) === 2){
        this.loginErrors['message'] = 'kindly check the activation code!'
        
            }
        
            }else if(parseInt(err['error'].code) === 3){
                this.loginErrors['message'] = 'Sorry, this account has been suspended'
            }
        
          else{
        
           this.loginErrors['message'] = 'Sorry, an error occured!'
        
        
            }
          }
        );
            this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
            this.errormessage = this.alerts['message']
        }
        
    }
    
    

    
  

export interface IAlert {
  id: number;
  type: string;
  message: string;
  }
  
  export interface loginErrors{
  message:any
  }





