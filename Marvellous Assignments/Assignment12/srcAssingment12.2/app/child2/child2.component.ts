import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
public result;
  constructor(private obj:StringService) { }

  ngOnInit() {
  }
count(value){
 this.result=this.obj.CountCapital(value);
}
}
