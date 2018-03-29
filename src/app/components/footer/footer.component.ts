import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../services/common.service';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public about:object;
	public latest:object;
	public mostvisited:object;
	constructor(
		private commonSerivce:CommonService,
		private brandService:BrandService
	)
	{
		
	}

  ngOnInit() {
  }

}
