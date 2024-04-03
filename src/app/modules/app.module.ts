import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from '../components/user/login/login.component';
import { SharedModule } from './shared.module';
import { EventEmitterService } from '../services/event-emitter-service';
import { MainModule } from './main.module';
import { provideAuth0 } from '@auth0/auth0-angular';
import { WeatherService } from '../services/weather.service';
import { CrudService } from '../services/crud.service';
import { ROUTE } from '../common/constants/page-route';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    MainModule,
    AppRoutingModule
  ],
  providers: [
      EventEmitterService,
      CrudService,
      WeatherService,
      provideAuth0({
        domain: 'dev-nxapiqqriolufhix.us.auth0.com',
        clientId: 'rW68mpAiEZJYUNkx09snST3ZY5kBMs8p',
        authorizationParams: {
          redirect_uri: window.location.origin
        }
      }),
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }