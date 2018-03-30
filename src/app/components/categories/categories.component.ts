import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import 'rxjs/add/operator/map';
import { SlickModule } from 'ngx-slick';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public topp:TopCatsResponse;    slideConfig = {'slidesToShow': 4, 'slidesToScroll': 1};
  constructor(public categoryService:CategoryService) { 
    this.categoryService.getTop().subscribe(res => {
      this.topp = res['data']
      console.log(this.topp)
    },err => console.log(err));
 }

  ngOnInit() {
  }

}
interface TopCatsResponse{
  topp:any[];
  base_url:string;
}
