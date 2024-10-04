import { Component } from '@angular/core';
import { StudentServiceService } from './student-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  admissionId: any;
  showContent: any = false;
  displayData: any = []
  showModal: any = false;
  copyArray: any = []
  inputValues: any
  isAscending: any
  enableSuccessModal: any = true
  disableSuccessModal: any = true

  constructor(private service: StudentServiceService) { }


  getAdmissionId() {
    let obj = {
      StudentAdmId: this.admissionId
    }
    this.service.fetchBookSaleDetailsByStudentClass(obj, (callback: any) => {
      if (callback.status == 200 && callback.data.length > 0) {
        this.displayData = callback.data
        this.copyArray = [].concat(this.displayData)


        this.showContent = true;
      } else {
        this.showModal = true
        this.showContent = false;


      }

    })


  }

  getsearchedValues() {
    let copy: any = [].concat(this.displayData)

    this.copyArray = copy.filter((e: any) => e.admission_number.includes(this.inputValues));

  }

  sort() {
    this.isAscending = !this.isAscending;
    if (this.isAscending) {
      this.copyArray.sort((a: any, b: any) => a.admission_number.localeCompare(b.admission_number));
    } else {
      this.copyArray.sort((a: any, b: any) => b.admission_number.localeCompare(a.admission_number));
    }
  }

  enable() {
    this.disableSuccessModal = true
    this.enableSuccessModal = false;

  }
  disable() {
    this.enableSuccessModal = true
    this.disableSuccessModal = false



  }


}
