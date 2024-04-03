import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay-spinner',
  templateUrl: './overlay-spinner.component.html',
  styleUrls: ['./overlay-spinner.component.scss']
})
export class OverlaySpinnerComponent implements OnInit {

  showSpinner : boolean  = false;
  constructor() { }

  ngOnInit() {
  }
  show(){
    this.showSpinner =true;
  }
  hide(){
    this.showSpinner = false;
  }
}
