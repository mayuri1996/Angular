import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private _location:Location) { }

  ngOnInit() {
  }
back(){
  this._location.back();
}
}
