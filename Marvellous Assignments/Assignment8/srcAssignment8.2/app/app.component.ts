import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvellous Infosystem’s First Application!';
  public sendData = "Hello from Parent"
  recieveData:string;
}
