import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms'
@Component({
  selector: 'app-crew-dashboard',
  templateUrl: './crew-dashboard.component.html',
  styleUrls: ['./crew-dashboard.component.css']
})
export class CrewDashboardComponent implements OnInit {
  result!:number
   Calculate(val:string,val2:string){
    this.result=parseInt(val)*parseInt(val2);

   }
   
  constructor() { }

  ngOnInit(): void {
  }

}
