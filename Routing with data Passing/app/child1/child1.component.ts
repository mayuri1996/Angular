import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
public result;
public result1;
  constructor(private obj:NumberService,private obj1:StringService,private route:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
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

  count(value){
    this.result1=this.obj1.CountCapital(value);
   }
}
