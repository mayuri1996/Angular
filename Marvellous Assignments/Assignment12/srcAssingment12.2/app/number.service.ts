import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  ChkPrime(value:number)
  {
        if(value==1){
          return false;
      }
      else if(value==2){
          return true;
      }
      else{
          for(var i=2;i<value;i++){
              if(value%i==0){
              return false;
              }
          }
          return true;
      }
  }
  
}
