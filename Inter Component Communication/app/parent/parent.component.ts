import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
public str;
public recieve = "I am from Parent";
  constructor() { }

  ngOnInit() {
  }

}
