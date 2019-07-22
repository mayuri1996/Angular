import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
 public str:string = "";

  constructor() { }

  ngOnInit() {
  }

  fun(value){
    this.str = value;
  }
  fun2(value){
   console.log(value);
   
  }

}
