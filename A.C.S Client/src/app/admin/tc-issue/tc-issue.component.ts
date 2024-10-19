import { Component } from '@angular/core';
import { TcIssueServiceService } from './tc-issue-service.service';
import { getLocaleFirstDayOfWeek } from '@angular/common';
import { flatMap } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tc-issue',
  templateUrl: './tc-issue.component.html',
  styleUrls: ['./tc-issue.component.css']
})
export class TcIssueComponent {
  studentClass: any
  displayData: any
  showModal: any = false;
  showContent: any = false
  copyArray: any = []
  inputValues: any
  editModal: any = false;
  detailsModal: any = false
  editStudentForm: any
  afterEditModal: any = false
  id: any
  tcGenerateModal:any = false;
  isSorted:any

  afterEditerrorModal: any = false;


  constructor(private service: TcIssueServiceService, private _fb: FormBuilder) {

    this.editStudentForm = _fb.group({
      admission_number: [],
      name: [],
      father_name: [],
      assign_class: [],
      permanent_address: [],
      phone_number: [],

    })
  }



  editStudentCredentials(student: any) {

    this.id = student.id

    this.editModal = true
    this.editStudentForm.patchValue(student)


  }
  getStudentClass() {
    let obj = {
      studentclassname: this.studentClass
    }

    this.service.fetchStudentCredentialByClass(obj, (callback: any) => {

      if (callback.status == 200 && callback.data.length > 0) {
        this.displayData = callback.data
        this.showContent = true;
        this.copyArray = [].concat(this.displayData)
      } else {
        this.showModal = true
        this.showContent = false;

      }

    })

  }
 


  getsearchedValues() {
    let copy: any = [].concat(this.displayData)

    this.copyArray = copy.filter((e: any) => e.name.includes(this.inputValues));

  }

  studentDetails() {
    this.detailsModal = true
  }

  afterEditValues() {
    this.service.editStudentCredential(this.id, this.editStudentForm.value, (callback: any) => {
      if (callback.status == 200) {
        this.editModal = false
        this.afterEditModal = true
      } else {
        this.afterEditerrorModal = true

      }


    })


  }
  sort(sortByValue:any){
    this.isSorted = !this.isSorted;
    if(!this.isSorted){
      return this.copyArray.sort((a:any,b:any)=>a[sortByValue].localeCompare(b[sortByValue]));
    }else{
      return this.copyArray.sort((a:any,b:any)=>b[sortByValue].localeCompare(a[sortByValue]));
    }
  }

  tcGenerateFunc(){
    this.tcGenerateModal = true;
  }


}
