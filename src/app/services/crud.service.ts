import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  apiUrl: string = environment.resourceApiUrl;
  constructor(private _http:HttpClient) {
   }
  
   handleError(error: HttpErrorResponse){
    return throwError(error);
   }
  GET(endPointURL:string) : Observable<any>{
     var url = `${this.apiUrl}/${endPointURL}`
      return this._http.get(url).pipe(
        map( (res:any) => <any>res),
        catchError(this.handleError),
      );
  }
  
  POST(endPointURL:string,param:any): Observable<any>{
    var url = `${this.apiUrl}/${endPointURL}`
    return this._http.post(url,param).pipe(
      map( (res:any) => <any>res),
      catchError(this.handleError) 
    );
  }

}
