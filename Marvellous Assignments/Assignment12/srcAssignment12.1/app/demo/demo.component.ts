import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  public result;
  constructor(private obj:ArithmeticService) { }

  ngOnInit() {
  }
add(value1:number,value2:number){
  this.result = this.obj.Add(value1,value2);
}
sub(value1:number,value2:number){
   this.result = this.obj.Sub(value1,value2);
}
}
