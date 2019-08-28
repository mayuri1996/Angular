import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imydatalist } from './imydatalist';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private _http:HttpClient) { }
  public url= "/assets/data.json";

  getData():Observable<Imydatalist[]>
  {
    let result = this._http.get<Imydatalist[]>(this.url);
    console.log("servisData"+result);
    return result;
  }
}
