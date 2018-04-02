import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
user: any;
  constructor(public UserService: UserService) { 
    this.UserService.getLikes().subscribe((res)=>{
      this.user = res['data'];
      console.log(this.user);
    })
  }


  ngOnInit() {
  }

}
