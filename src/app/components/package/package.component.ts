import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../services/package.service'

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
packages: any;
  constructor(public packageService: PackageService) { 
    this.packageService.get({}).subscribe((res)=>{
      this.packages = res['data'];
      console.log(this.packages)
   })
  }

  ngOnInit() {
  }

}
