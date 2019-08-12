import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() public data = new EventEmitter();
  @Input() recieveData = "";
   constructor() { }

  ngOnInit() {
  }
  senderData(){
    this.data.emit("I am from Child");
  }
}
