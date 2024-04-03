import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../../../services/weather.service';
import { Subscription } from 'rxjs';
import { AppStoreService } from '../../../services/app-store-service';
import { Router } from '@angular/router';
import { ROUTE } from '../../../common/constants/page-route';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  wForcasts: Array<any> = new Array<any>;
  subs = new Subscription();
  cityName : string = "";
  constructor(private weatherService: WeatherService, private _router:Router) { 


  }

  ngOnInit() {
    
     this.cityName =  sessionStorage.getItem("searchedCity") || "";
     this.searchForcast();
  }
  getHumanDate(utcSeconds:number){
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(utcSeconds);
    let month = d.getMonth() + 1;// month starts with 0
    let date = d.getDate();
    return `${month < 10 ? '0':''}${month}/${date < 10 ? '0':''}${date}/${d.getFullYear()} ${d.toLocaleTimeString()}`
  }
  searchForcast(){
    this.weatherService.getWeatherForcast(this.cityName).subscribe(forcast => {
      if (forcast) {
        this.wForcasts = ((forcast.list || [])).map((f: any) => {
          return {
            date: this.getHumanDate(f.dt),
            tempC: f.main.temp,
            tempF: f.main.temp_kf,
            main: f.weather[0].main,
            desc: f.weather[0].description,
            pressure: f.main.pressure,
            humidity: f.main.humidity
          }
        })
      }

    }, err => {

    })
  }

  goBack(){
    this._router.navigate([`${ROUTE.Main}/${ROUTE.Home}`]); 
  }
}
