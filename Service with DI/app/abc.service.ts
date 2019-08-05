import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbcService {

  constructor() { }

  fun(){
    var student = [
       {name:"mayuri",age:24,email:"mayuri.powar@gmail.com"},
       {name:"pooja",age:24,email:"pooja.powar@gmail.com"},
       {name:"shreya",age:24,email:"shreya.powar@gmail.com"}
    ]
    return student;
  }
}
