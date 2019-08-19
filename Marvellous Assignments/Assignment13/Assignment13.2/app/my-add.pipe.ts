import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(value:number,value1:number): number
   {
    let result = value+value1;
    return result;
  }

}
