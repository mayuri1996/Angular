import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  CountCapital(value)
  {
    var count=0;
    var str = value;
    for(var i=0;i<str.length;i++){
      if(str[i]==str[i].toUpperCase()){
        count++;
      }
    }
    return count;
  }
}
