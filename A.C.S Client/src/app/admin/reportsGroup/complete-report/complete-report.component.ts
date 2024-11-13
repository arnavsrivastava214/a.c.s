import { Component } from '@angular/core';
import { ReportsGroupService } from '../reports-group.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { getLocaleFirstDayOfWeek } from '@angular/common';

@Component({
  selector: 'app-complete-report',
  templateUrl: './complete-report.component.html',
  styleUrls: ['./complete-report.component.css']
})
export class CompleteReportComponent {

  dateObj:any;
  assign_class:any='';
  completesReportData:any=[];
  minEndDate: string = '';
  maxStartDate: string = '';
  showErrorModal:any = false;

  constructor(private _service:ReportsGroupService, private fb: FormBuilder) {
    this.dateObj = this.fb.group({
      startDate: [''],
      endDate: [''],
    });
  }

  ngOnInit(): void {
    this.onDateChange();
  }

  onDateChange(): void {
    this.dateObj.get('startDate')?.valueChanges.subscribe((startDate:any) => {
      if (startDate) {
        this.minEndDate = startDate;
      } else {
        this.minEndDate = '';
      }
    });

    this.dateObj.get('endDate')?.valueChanges.subscribe((endDate:any) => {
      if (endDate) {
        this.maxStartDate = endDate;
      } else {
        this.maxStartDate = '';
      }
    });
  }


  searchReport(){
    let params:any={
      assign_class:this.assign_class,
      startDate:this.dateObj.value.startDate,
      endDate:this.dateObj.value.endDate,
    };
    

    this._service.fetchCompleteReport(params, (res:any)=>{
      if(res.status == 200 && res.data.length>0){
        console.log(res.data);
        this.completesReportData = res.data;
      }else{
        this.completesReportData = false;
        this.showErrorModal = true;
        this.dateObj.reset();
        this.assign_class= "";
      }
    })
  }
}
