import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
public result;
  constructor(private obj:NumberService) { }

  ngOnInit() {
  }
  checkNum(value){
    this.result = this.obj.ChkPrime(value);
    if(this.result==true){
      this.result = "Number is Prime Number."
    }
    else{
      this.result = "Number is not a Prime number."
    }
  }
}
