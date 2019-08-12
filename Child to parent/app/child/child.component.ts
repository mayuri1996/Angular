import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() public data = new EventEmitter();
   constructor() { }

  ngOnInit() {
  }
  senderData(){
    this.data.emit("I am from Child");
  }
}
