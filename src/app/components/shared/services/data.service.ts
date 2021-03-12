import { Injectable, Output,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  @Output() dataEmitter = new EventEmitter();
  constructor() { }
  sendData(data){
    this.dataEmitter.emit(data);
  }
  recieveData(){
    return this.dataEmitter;
  }
}
