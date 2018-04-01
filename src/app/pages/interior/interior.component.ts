import { Component, OnInit } from '@angular/core';
import {InteriorService} from '../../services/interior.service'
@Component({
  selector: 'app-interior',
  templateUrl: './interior.component.html',
  styleUrls: ['./interior.component.css']
})
export class InteriorComponent implements OnInit {

  images: Array<string>;
  slides:any;
  constructor(public InteriorService:InteriorService ) {
    this.InteriorService.get().subscribe((res)=>{
      this.slides = res['data']; 
      console.log(this.slides)
     });

   }

  ngOnInit() {
  }

}
