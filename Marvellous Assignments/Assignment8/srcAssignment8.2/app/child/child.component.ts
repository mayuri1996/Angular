import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Output() obj = new EventEmitter();
@Input() public sendingData="";
public senderData;
  constructor() { }

  ngOnInit() {
  }
public sender(){
  this.obj.emit("Hello from Child");
}

}
