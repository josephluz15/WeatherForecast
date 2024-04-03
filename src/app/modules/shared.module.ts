import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbActiveModal, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerModule } from "ngx-spinner";
import { ConfirmDialogComponent } from "../components/shared/dialog/confirm/confirm-dialog/confirm-dialog.component";
import { BsAlertComponent } from "../components/shared/bs-alert/bs-alert.component";


@NgModule({
  declarations: [
   ConfirmDialogComponent,
   BsAlertComponent
  ],
  imports: [    
    BrowserModule,
    FormsModule,
    CommonModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports :[
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
