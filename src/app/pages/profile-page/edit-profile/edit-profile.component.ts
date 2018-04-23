import { Component, OnInit,ElementRef,ViewChild} from '@angular/core';
import  {UserService} from '../../../services/user.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import  {CookieService} from 'ngx-cookie-service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  public id:number;
  public user:object = {};
	@ViewChild('logo') public logo:ElementRef;
	@ViewChild('cover') public cover:ElementRef;

	public profileForm:FormGroup;
	public submitting:boolean=false;

	constructor(
		public _fb :FormBuilder,
    private userService:UserService,
    private cookieService:CookieService
	){
		this.initForm();

  }
  
	getUserInfo(){
		this.userService.getProfile().subscribe(res=>{
      this.user = res;
      this.id = res['id'];
      this.patchForm();
			this.cookieService.delete('user');
			this.cookieService.set('user',JSON.stringify(res));
		})
	}

	getLogoUrl($event:any){
     this.userService.getFileUrl($event).subscribe((res:string)=>{
      this.user['ximage'] = res;
     },err=>{
       console.log('getLogoUrl err', err);
     });
   }
   getCoverUrl($event:any){
     this.userService.getFileUrl($event).subscribe((res:string)=>{
      this.user['xcover_photo'] = res;
     },err=>{
       console.log('getCoverUrl err', err);
     });
   }

	ngOnInit(){
    this.getUserInfo();
	}

	initForm(){
		this.profileForm = this._fb.group({
	       	"name": ['',[Validators.required]],
	        "phone": ['',[Validators.required,this.validMobile]],
	        "email": ['',[Validators.required,Validators.email]],
    	});

	}
	validMobile(mobile){
		let pattern = /^([+])?[0-9]{5,}/;
		return pattern.test(mobile.value);
	}
	validUrl(url){
		var pattern = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
		return pattern.test(url.value);
	}
	patchForm(){
			//
		this.profileForm['controls'].email.patchValue(this.user['email']);
		this.profileForm['controls'].phone.patchValue(this.user['phone']);
		this.profileForm['controls'].name.patchValue(this.user['name']);
	}

	uploadCover(){
	    let fileBrowser = this.cover.nativeElement;
	    if (fileBrowser.files && fileBrowser.files[0]) {
	      const formData = new FormData();
	      formData.append("image", fileBrowser.files[0]);
	      this.userService.uploadCoverPhoto(formData).subscribe(res => {
          this.getUserInfo();
	      	// console.log(res)
	        // do stuff w/my uploaded file
        },
      err=>{
        this.getUserInfo();
      });
	    }
	}

	uploadLogo(){
	    let fileBrowser = this.logo.nativeElement;
	    if (fileBrowser.files && fileBrowser.files[0]) {
	      const formData = new FormData();
	      formData.append("image", fileBrowser.files[0]);
	      this.userService.uploadProfilePicture(formData).subscribe(res => {
	      	// console.log(res)
	      	this.submitting = false;
	      	this.getUserInfo();

	        // do stuff w/my uploaded file
	      },err=>{
	      	this.submitting = false;
	      	this.getUserInfo();
	      });
	    }else{
	    	this.submitting = false;
	    	this.getUserInfo();

	    }

	}

	submitProfile(){
		this.submitting = true;
		let data = this.profileForm.value;
		this.userService.postedits(data).subscribe((res)=>{
			this.uploadCover();
			this.uploadLogo();
		},
		(err)=>{
			this.submitting = false;

		});
	}
}