import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError, Observable, retry, throwError} from 'rxjs';
import { Url } from '../models/Url';
@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http:HttpClient) { }
  getUrls() : Observable<Url[]>{
    return this.http.get<Url[]>("http://localhost:9090/urls").pipe(retry(1),catchError(this.handleError));
  }

  addUrl(url:Url) : Observable<any> {
    return this.http.post("http://localhost:9090/url",url)
                    .pipe(
                      retry(1),
                      catchError(this.handleError));
  }

  updateUrl(url:Url) : Observable<any> {
    return this.http.put("http://localhost:9090/UpdateUrl",url).pipe(retry(1),catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
