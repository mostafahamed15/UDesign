import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {SlidesService} from '../../../services/slides.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  images: Array<string>;
  slides:any;

  constructor(private _http: HttpClient,
              public slidesService: SlidesService
  ) {
    this.slidesService.get().subscribe((res)=>{
      this.slides = res['data']; 
      console.log(this.slides)
     });

  }


  ngOnInit() {
    this.slidesService.get().subscribe((res)=>{
      this.slides = res['data']; 
      console.log(this.slides)
     });

}
}