import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  Add(value1:number,value2:number){
    var result = Number(value1)+Number(value2);
    return result;
  }

  Sub(value1:number,value2:number){
     return value1-value2;
  }
}
