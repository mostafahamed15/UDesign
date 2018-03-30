import { Component, OnInit } from '@angular/core';
import { AdsService } from '../../services/ads.service'
import { SlickModule } from 'ngx-slick';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.css']
})
export class AdvertisementsComponent implements OnInit {
  images: Array<string>;
  slides:any;
  constructor(public addService:AdsService ) {
    this.addService.get().subscribe((res)=>{
      this.slides = res['data']; 
      console.log(this.slides)
     });

   }
   ngOnInit(){

   }
  }
  
 


