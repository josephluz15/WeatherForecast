import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from '../shared/dialog/confirm/confirm-dialog/confirm-dialog.component';
import { ROUTE } from '../../common/constants/page-route';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  toggleNav : boolean = false;
  constructor(private modalService:NgbModal,private _router: Router, private auth:AuthService) { }

  ngOnInit() {
  }

  doLogout(){
    const modalRef = this.modalService.open(ConfirmDialogComponent,{backdrop:'static',size:"sm" })
    modalRef.componentInstance.message = "Are you sure you want to Logout?" ;
    modalRef.componentInstance.noTitle = true ;
    modalRef.result.then(async (result)=>{
      this._router.navigate([ROUTE.Login]);    
      this.auth.logout({ 
        logoutParams: {
          returnTo: document.location.origin 
        }
      });  
    
    },(reason)=>{
      //do nothing -- close via cancel or close button
    })
  }

  showSettings(event:any){

  }

}
