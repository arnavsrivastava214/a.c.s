import { Component } from '@angular/core';
import { AlertService } from 'src/app/shared/alert.service';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  hover:boolean=false;
  userData:any={}
  constructor(private service:AlertService,private common:CommonService){}

  ngOnInit(){
    this.userData =  JSON.parse(<any>localStorage.getItem('user') || '{}');
  }
  onChange(){
    window.location.reload();
    this.service.success("Welcome To Scool Management", "Success",{displayDuration : 2000})

  }

}
