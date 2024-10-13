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
  isAscending: any
  editModal: any = false;
  detailsModal: any = false
  editStudentForm: any
  afterEditModal: any = false
  id: any
  tcGenerateModal:any = false;

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
  sort() {
    this.isAscending = !this.isAscending;
    if (this.isAscending) {
      this.copyArray.sort((a: any, b: any) => a.admission_number.localeCompare(b.admission_number));
    } else {
      this.copyArray.sort((a: any, b: any) => b.admission_number.localeCompare(a.admission_number));
    }
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

  tcGenerateFunc(){
    this.tcGenerateModal = true;
  }


}
