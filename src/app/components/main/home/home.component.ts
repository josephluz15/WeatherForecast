import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from '../../shared/dialog/confirm/confirm-dialog/confirm-dialog.component';
import { WeatherService } from '../../../services/weather.service';
import { AppStoreService } from '../../../services/app-store-service';
import { Router } from '@angular/router';
import { ROUTE } from '../../../common/constants/page-route';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private modalService:NgbModal, private weathrService:WeatherService, private appStoreService:AppStoreService,
    private _router:Router,public auth:AuthService
    ) { }
  wForcasts: Array<any> = new Array<any>;
  searchKey: string = "";
  userProfile: any = null;
  ngOnInit() {
    this.auth.user$.subscribe(
      (profile) => {
        this.userProfile = profile;
      }
    );
  }

  onTriggerSearch(){
    this.navToWeatherPage();
  }
  
  navToWeatherPage(){
    sessionStorage.setItem("searchedCity",this.searchKey);
    if(this.searchKey != ""){
      //this.appStoreService.setSearchStore(this.searchKey);
      this._router.navigate([`${ROUTE.Main}/${ROUTE.Weather}`]); 
    }else{
      alert("Please enter City!");
    }
      
  }

}
