import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(value: number,value1:number): number 
  {
    let result = value*value1;
    return result;
  }

}
