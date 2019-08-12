import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPractice';
  public arr = [];
  constructor(private _obj:MyServiceService){
    this._obj.getList()
    .subscribe(data=>this.arr=data);
  }
  }
