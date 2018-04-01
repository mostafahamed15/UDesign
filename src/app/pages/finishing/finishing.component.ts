import { Component, OnInit } from '@angular/core';
import { FinishingService } from '../../services/finishing.service';

@Component({
  selector: 'app-finishing',
  templateUrl: './finishing.component.html',
  styleUrls: ['./finishing.component.css']
})
export class FinishingComponent implements OnInit {
  finishingOfice: any;

  constructor(public finishing: FinishingService) {
    this.finishing.get().subscribe((res)=>{
       this.finishingOfice = res['data'];
       console.log(this.finishingOfice)
    })
   }

  ngOnInit() {
  }

}
