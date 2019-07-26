import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent {

   str:string="Marvellous Infosystem";

 public fun()
 {
   return this.str;
 }
}
