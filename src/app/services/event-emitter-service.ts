import { Injectable, EventEmitter } from "@angular/core";
import { Subscription } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EventEmitterService {
  //overlayLoader
  invokeIsBusyFunction = new EventEmitter();
  subsVar: Subscription | undefined;

  constructor() {}

  set IsBusy(isShow: boolean) {
    this.invokeIsBusyFunction.emit(isShow);
  }
}
