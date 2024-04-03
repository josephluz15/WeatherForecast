import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppStoreService {

  private searchKeyWordSource = new BehaviorSubject(""); 
  public searchKeyWordStore = this.searchKeyWordSource.asObservable();   


  constructor() { }
  setSearchStore(val:string){
    this.searchKeyWordSource.next(val);
  }

};