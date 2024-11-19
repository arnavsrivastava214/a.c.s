import { Component } from '@angular/core';
import { AcademicreportService } from './academicreport.service';

@Component({
  selector: 'app-academic-report',
  templateUrl: './academic-report.component.html',
  styleUrls: ['./academic-report.component.css']
})
export class AcademicReportComponent {
  getClass: any
  showModal: any = false
  displayData: any
  copyArray: any = []
  inputValues: any
  isAscending: any
  showContent: any = false



  constructor(private service: AcademicreportService) { }


  getSelctedValue() {
    let obj = {
      assign_class: this.getClass
    }
    this.service.fetchStudentDetailsByClass(obj, (callback: any) => {
      if (callback.status == 200 && callback.data.length > 0) {
        this.displayData = callback.data;
        this.copyArray = [].concat(this.displayData)
        this.showContent = true


      } else {
        this.showModal = true
        this.showContent = false
        this.getClass  = "";
      }

    })

  }

  getsearchedValues() {
    let copy: any = [].concat(this.displayData)

    this.copyArray = copy.filter((e: any) => e.admission_number.includes(this.inputValues));

  }
  sort(sortByValue: any) {
    this.isAscending = !this.isAscending;
    if (!this.isAscending) {
      return this.copyArray.sort((a: any, b: any) => a[sortByValue].localeCompare(b[sortByValue]));
    } else {
      return this.copyArray.sort((a: any, b: any) => b[sortByValue].localeCompare(a[sortByValue]));
    }
  }
  printPage() {
    window.print();
  }

}
