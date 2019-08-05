import { Component } from '@angular/core';
import { AbcService } from './abc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvellous Infosystem’s First Application!';
   public arr = [];
   constructor(private obj:AbcService){}
  
   ngOnInit(){
      this.arr = this.obj.fun();
   }

}
