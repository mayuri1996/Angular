import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Output() obj = new EventEmitter();
public senderData;
  constructor() { }

  ngOnInit() {
  }
public sender(value){
  this.senderData = value;
  this.obj.emit(this.senderData);
}

}
