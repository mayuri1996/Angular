import { Component, OnInit } from '@angular/core';
import { AbcService } from '../abc.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  public arr = [];
  constructor(private obj:AbcService) { }

  ngOnInit() {
    this.arr = this.obj.fun();
  }

}
