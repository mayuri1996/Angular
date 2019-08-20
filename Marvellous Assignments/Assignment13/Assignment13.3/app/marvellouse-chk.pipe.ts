import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellouseChk'
})
export class MarvellouseChkPipe implements PipeTransform {

  transform(value: number, param: string )
  {
    if(param=="Prime")
    {
      let msg = "It is prime."
      let msg1 = "It Is not a prime."
      if(value==1){
        return msg1;
       }
    else if(value==2){
        return msg;
    }
    else{
        for(var i=2;i<value;i++){
            if(value%i==0){
             return msg1;
            }
        }
         return msg;
    }
    }

    if(param == "Even")
    {
      let msg = "It is Even."
      let msg1 = "It Is not a Even."
        if(value%2==0){
          return msg;
        }
        return msg1;
    }

    if(param == "Odd")
    {
      let msg = "It is Odd."
      let msg1 = "It Is not a Odd."
        if(value%2==0){
          return msg1;
        }
        return msg;
    }

    if(param == "Perfect")
    {
      let msg = "It is Perfect."
      let msg1 = "It Is not a Perfect."
      let result = 0;
         for(let i=0;i<value;i++)
         {
           if(value%i==0){
              result=result+i;
           }
           if(value==result){
             return msg;
           }
         }
        return msg1;
    }
  }

}
