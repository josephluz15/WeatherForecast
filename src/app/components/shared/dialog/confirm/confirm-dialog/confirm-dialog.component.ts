import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  title:string ="Confirmation";
  message:string = "";
  noTitle:boolean = false;
  constructor(public activeModal : NgbActiveModal) { }

  ngOnInit() {
  }
  confirm(){
    this.activeModal.close();
  }

}
