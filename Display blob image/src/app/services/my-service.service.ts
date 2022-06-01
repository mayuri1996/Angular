import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(
    private httpclient : HttpClient
  ) { }

  getBlobImage():Observable<any>{
    const url = `http://localhost:8080/api/auth/getBlobImage`;
    return this.httpclient.get(url).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
