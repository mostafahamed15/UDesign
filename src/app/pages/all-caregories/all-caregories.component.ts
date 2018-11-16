import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-all-caregories',
  templateUrl: './all-caregories.component.html',
  styleUrls: ['./all-caregories.component.css']
})
export class AllCaregoriesComponent implements OnInit {
  public topp:TopCatsResponse = {
    topp:[],
    base_url:null
  };
  constructor(public categoryService:CategoryService,
    public router: Router) {
    this.categoryService.getTop().subscribe(res => {
      this.topp = res['data']
      console.log(this.topp)
    },err => console.log(err));
   }

  ngOnInit() {
  }
  product(id){
    this.router.navigateByUrl('product/' + id);
  }

  child(){
    
  }
}
interface TopCatsResponse{
  topp:any[];
  base_url:string;
}
