import { getLocaleMonthNames } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AcademicRecServiceService } from './academic-rec-service.service';


@Component({
  selector: 'app-academic-records',
  templateUrl: './academic-records.component.html',
  styleUrls: ['./academic-records.component.css']
})
export class AcademicRecordsComponent {

  show:any = false
  id:string = '';
  performanceForm:any;
  myresponse:any;
  studentRecords:any
  constructor (private _fb:FormBuilder, private service:AcademicRecServiceService){
    this.performanceForm = _fb.group({
      drawingrating:[],
      drw_1_2Term:[],
      drw_2_1Term:[],
      drw_2_2Term:[],
      drw_consolidate:[],
      hw_1_1Term:[],
      hw_2_1Term:[],
      hw_2_2Term:[],
      hw_consolidate:[],
      su_1_1Term:[],
      su_1_2Term:[],
      su_2_1Term:[],
      su_2_2Term:[],
      su_consolidate:[],
      pt_1_1Term:[],
      pt_1_2Term:[],
      pt_2_1Term:[],
      pt_2_2Term:[],
      pt_consolidate:[],
      per_1_1Term:[],
      per_1_2Term:[],
      per_2_1Term:[],
      per_2_2Term:[],
      per_consolidate:[],
      dis_1_1Term:[],
      dis_1_2Term:[],
      dis_2_1Term:[],
      dis_2_2Term:[],
      dis_consolidate:[],
      pos_1_1Term:[],
      pos_1_2Term:[],
      pos_2_1Term:[],
      pos_2_2Term:[],
      pos_consolidate:[],
      attd_1_1Term:[],
      attd_1_2Term:[],
      attd_2_1Term:[],
      attd_2_2Term:[],
      attd_consolidate:[],
      remarks1:[],
      remarks2:[],
      remarks3:[],
      remarks4:[],
      section:[],
      rollNo:[],
    })

    

  }  


  getStudentPerformance(){
    console.log(this.performanceForm.value);
  }
  getStudentId(){
    let params:any={
      student_id:this.id
    }

    this.service.fetchstudentRecords(params,(response:any)=>{
      

      this.studentRecords = response.data;
      if(response.status == 200){
        this.show = true;

      }
      
    })
    

  }
}

