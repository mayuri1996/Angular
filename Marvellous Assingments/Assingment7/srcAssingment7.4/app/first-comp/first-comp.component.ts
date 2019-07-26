import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {
  str:string="Marvellouse Infosystem"
  upper:string;
  lower:string;
  constructor() { }

  ngOnInit() {
  }
   
  fun(){
    this.upper = this.str.toUpperCase();
    return this.upper
  }
  fun2(){
    this.lower = this.str.toLowerCase();
    return this.lower;
  }
}
