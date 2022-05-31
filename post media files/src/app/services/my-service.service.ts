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

  postMediaFiles(formData):Observable<any>{
    const url = `http://localhost:8080/api/auth/addProblemStatement`;
    return this.httpclient.post(url, formData).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
