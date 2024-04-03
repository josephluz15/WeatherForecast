import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbActiveModal, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerModule } from "ngx-spinner";
import { ConfirmDialogComponent } from "../components/shared/dialog/confirm/confirm-dialog/confirm-dialog.component";
import { BsAlertComponent } from "../components/shared/bs-alert/bs-alert.component";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
   ConfirmDialogComponent,
   BsAlertComponent
  ],
  imports: [    
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    ReactiveFormsModule,
    NgbModule
  ],
  exports :[
    BrowserAnimationsModule,
    NgxSpinnerModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BsAlertComponent,
    NgbModule
  ],
  providers : [NgbActiveModal]
})
export class SharedModule { }
