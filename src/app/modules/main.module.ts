import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ROUTE } from '../common/constants/page-route';
import { MainComponent } from '../components/main/main.component';
import { HomeComponent } from '../components/main/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared.module';
import { FooterComponent } from '../components/main/footer/footer.component';
import { WeatherComponent } from '../components/main/weather/weather.component';
import { authGuardFn } from '@auth0/auth0-angular';



const routes : Routes = [
  {
    path:ROUTE.Main,
    component: MainComponent,
    children:[
      {path: '', redirectTo :  ROUTE.Home,pathMatch:'full'},
      {path :ROUTE.Home,component:HomeComponent,pathMatch:'full'},
      {path :ROUTE.Weather,component:WeatherComponent,pathMatch:'full'},
    ],
    canActivate :[authGuardFn]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
   MainComponent,
   HomeComponent,
   FooterComponent,
   WeatherComponent
  ],
  providers :[]
})
export class MainModule { }
