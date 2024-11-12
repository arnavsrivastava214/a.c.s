import { Component } from '@angular/core';
import { ReportsGroupService } from '../reports-group.service';

@Component({
  selector: 'app-complete-report',
  templateUrl: './complete-report.component.html',
  styleUrls: ['./complete-report.component.css']
})
export class CompleteReportComponent {

  dateObj:any={};
  assign_class:any='';
  completesReportData:any=[];

  constructor(private _service:ReportsGroupService){}

  searchReport(){
    let params:any={
      assign_class:this.assign_class,
      startDate:this.dateObj.startDate,
      endDate:this.dateObj.endDate
    };

    this._service.fetchCompleteReport(params, (res:any)=>{
      if(res.status == 200){
        console.log(res.data);
        this.completesReportData = res.data;
      }
    })
  }
}
