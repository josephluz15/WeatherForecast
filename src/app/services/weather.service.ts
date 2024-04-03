import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiUrl: string = environment.weatherMapBaseUrl;
  appId: string = atob(environment.wmk);
  constructor(private _http: HttpClient) {
  }

  getLonLat(cityName:string): Observable<any> {
    
    const url = `${this.apiUrl}/geo/1.0/direct?q=${cityName}&appid=${this.appId}&limit=5`;
    return this._http.get(url).pipe(
      map((res:any) => {
        return res;
      }));
  }
  getWeatherForcast(cityName:string): Observable<any> {
    const url = `${this.apiUrl}/data/2.5/forecast?q=${cityName}&appid=${this.appId}`;
    return this._http.get(url).pipe(
      map((res:any) => {
        return res;
      }));
  }
  
}
