import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { EventEmitterService } from './services/event-emitter-service';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Weather Forcast';

  constructor(private _eventService : EventEmitterService,private spinner:NgxSpinnerService){
    if (this._eventService.subsVar==undefined) {    
      this._eventService.subsVar = this._eventService.invokeIsBusyFunction.subscribe((isShow:boolean) => {    
          if(isShow)this.spinner.show();
          else this.spinner.hide();
      });    
    } 
  }
}
