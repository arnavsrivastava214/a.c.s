import { Component } from '@angular/core';
import { ReportsGroupService } from '../reports-group.service';

@Component({
  selector: 'app-collection-report',
  templateUrl: './collection-report.component.html',
  styleUrls: ['./collection-report.component.css']
})
export class CollectionReportComponent {
  collectionParticularDate:any = true;
  collectionAdmissionWise:any = false;
  collectionBetweenTwoDates:any = false;

  particularDate:any='';
  admission_number:any='';
  startDate:any='';
  endDate:any='';
  collectionReportData:any=[];

  constructor(private _service:ReportsGroupService){}

  colParticulardate(){
    this.collectionParticularDate = true;
    this.collectionAdmissionWise = false
    this.collectionBetweenTwoDates =false
  }
  collAdmissionWise(){
    this.collectionAdmissionWise = true
    this.collectionParticularDate = false;
    this.collectionBetweenTwoDates =false
  }
  
  collBetweenTwoDates(){
    this.collectionBetweenTwoDates = true;
    this.collectionAdmissionWise = false
    this.collectionParticularDate = false;
  }

  searchParticularDate(){
    let params:any= {
      startDate:this.particularDate,
      endDate:this.particularDate
    };

    this._service.fetchCollectionReportByParticularDate(params, (res:any)=>{
      if(res.status == 200){
        this.collectionReportData = res.data;
        console.log(res.data);
      } 
    })
  }

  searchByAdmissionNumber(){
    let params:any= {
      admission_number:this.admission_number
    };

    this._service.fetchCollectionReportByAdmissionNumber(params, (res:any)=>{
      if(res.status == 200){
        console.log(res.data);
        this.collectionReportData = res.data;
      } 
    })
  }

  searchByStartEndDate(){
    let params:any= {
      startDate:this.startDate,
      endDate:this.endDate
    };

    this._service.fetchCollectionReportByStartEndDate(params, (res:any)=>{
      if(res.status == 200){
        console.log(res.data);
        this.collectionReportData = res.data;
      } 
    })
  }

}
