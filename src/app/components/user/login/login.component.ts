import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../../../services/event-emitter-service';
import { Router } from '@angular/router';
import { ROUTE } from '../../../common/constants/page-route';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _eventService:EventEmitterService,private _router:Router, private auth: AuthService) { }

  ngOnInit() {
    // this.auth.AUT({
    //   connection: 'github',
    //   scope: 'email read:user user:follow notifications',
    //   responseType: 'code',
    //   returnTo: window.location.href
    // });
  }

  login() {      
    
    this._eventService.IsBusy = true;
    this.auth.loginWithRedirect({
      appState: { target: `/${ROUTE.Main}/${ROUTE.Home}` }
    });

   
   // this._router.navigate([`${ROUTE.Main}/${ROUTE.Home}`]);       
  }   
}
