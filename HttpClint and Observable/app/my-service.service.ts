import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ilist } from './ilist';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private _http:HttpClient) { }

  public url = "/assets/data.json";
  
  getList():Observable<Ilist[]>
  {
    return this._http.get<Ilist[]>(this.url);
  }
}
