import { Component, OnInit } from '@angular/core';
import { AlertType } from '../../../common/enums/alert-type';

@Component({
  selector: 'app-bs-alert',
  templateUrl: './bs-alert.component.html',
  styleUrls: ['./bs-alert.component.css']
})
export class BsAlertComponent implements OnInit {

  alertType : string  = "";
  message  : string = "";
  isShow : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  show(message:string, alertType : string  = AlertType.Success){
    this.message = message;
    this.alertType = alertType;
    this.isShow = true;
  }

  hide(){
    this.isShow = false;
    this.message = "";
    this.alertType = "";
  }

}
