
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { ProductService } from '../../../services/product.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcat',
  templateUrl: './subcat.component.html',
  styleUrls: ['./subcat.component.css']
})
export class SubcatComponent implements OnInit {

  temporary:any
id
  public topp:TopCatsResponse = {
    topp:[],
    base_url:null,
  };
  constructor(public categoryService:CategoryService,
    public router: Router,
    public route:ActivatedRoute
  
  ) { 

      this.categoryService.getTop().subscribe(res => {
        this.topp = res['data']['topCats'];
        this.temporary=res['data']['topCats'][0]['childs'][0]
        console.log(this.temporary)
        console.log(this.topp)
      },err => console.log(err));



    }
    product(id){
      this.router.navigateByUrl('product/' + id);
    }
  ngOnInit() {
  }

}
interface TopCatsResponse{
  topp:any[];
  base_url:string;
}

