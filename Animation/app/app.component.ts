import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { trigger, state, transition, animate, style } from '@angular/animations';
@Component({
  selector: 'app-root',
  animations: [
    trigger('balloonEffect', [
      state('initial', style({
        backgroundColor: 'green',
        transform: 'scale(2)'
      })),
      state('final', style({
        backgroundColor: 'red',
        transform: 'scale(1.5)'
      })),
      transition('final=>initial', animate('500ms')),
      transition('initial=>final', animate('1500ms'))
    ]),
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentState = 'initial';

changeState() {
  this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
}
  }
