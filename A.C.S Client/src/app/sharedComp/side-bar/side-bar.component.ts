import { Component } from '@angular/core';
import { SideBarServiceService } from './side-bar-service.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  displayUserCredential:any

  constructor (private service:SideBarServiceService){}

  // ngOnInit(){
  //   this.service.fetchProfieImageByUserTable((callback:any)=>{
  //     this.displayUserCredential = callback
      
  //   })
  }
// }
