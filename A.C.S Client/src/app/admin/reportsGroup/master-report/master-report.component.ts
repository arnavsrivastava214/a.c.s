import { Component } from '@angular/core';
import { MasterReportServiceService } from './master-report-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-master-report',
  templateUrl: './master-report.component.html',
  styleUrls: ['./master-report.component.css']
})
export class MasterReportComponent {

  admissionId: any
  displayData: any
  showModal: any = false;
  showContent: any = false
  copyArray: any = []
  inputValues: any
  editModal: any = false
  studentForm: any
  id:any
  constructor(private service: MasterReportServiceService, private _fb: FormBuilder) {
    this.studentForm = _fb.group({
      admission_number: [],
      name: [],
      father_name: [],
      mother_name: [],
      guardian_name: [],
      date_of_birth: [],
      father_occupation: [],
      assign_class: [],
      present_address: [],
      permanent_address: [],
      nationality: [],
      pin: [],
      religion: [],
      period_of_residence_in_up: [],
      previous_school: [],
      phone_number: [],
    })

  }

  getAdmissionId() {

    let obj = {
      assign_class: this.admissionId
    }

    this.service.fetchStudentCredentialByStudentId(obj, (callback: any) => {
      if (callback.status == 200 && callback.data.length > 0) {
        console.log(callback.data);
        this.displayData = callback.data
        this.showContent = true
        this.copyArray = [].concat(this.displayData)


      } else {
        this.showModal = true
        this.showContent = false

      }

    })

  }
  getsearchedValues() {
    let copy: any = [].concat(this.displayData)

    this.copyArray = copy.filter((e: any) => e.name.includes(this.inputValues));

  }

  edit(student:any) {
    this.id = student.id
    this.editModal = true

    this.studentForm.patchValue(student)
  }
  editStudentCredential() {
    this.service.editstudentCredentialById(this.studentForm.value,this.id,(callback:any)=>{
      
    } )


    this.studentForm.reset();
    this.editModal = false;
  }

  isSorted:boolean=false;

  sort(sortByValue:any){
    this.isSorted = !this.isSorted;
    if(!this.isSorted){
      return this.copyArray.sort((a:any,b:any)=>a[sortByValue].localeCompare(b[sortByValue]));
    }else{
      return this.copyArray.sort((a:any,b:any)=>b[sortByValue].localeCompare(a[sortByValue]));
    }
  }

  printDoc(){
    window.print();
  }
}
