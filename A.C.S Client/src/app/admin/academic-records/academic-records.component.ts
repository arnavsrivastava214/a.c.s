import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-academic-records',
  templateUrl: './academic-records.component.html',
  styleUrls: ['./academic-records.component.css']
})
export class AcademicRecordsComponent {

  show:any = false
  performanceForm:any;
  constructor (private _fb:FormBuilder){
    this.performanceForm = _fb.group({
      drawingrating:[]
    })

  }  


  getStudentPerformance(){
    console.log(this.performanceForm.value);
    


  }
}