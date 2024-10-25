import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  collapse:boolean=true;

  receiveChildEvent(event:any){
    this.collapse=event;
  }

}
