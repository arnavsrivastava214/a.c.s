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
  displayData: any = [];
  showModal: any = false;
  copyArray: any = [];
  inputValues: any;
  isAscending: any;
  enableSuccessModal: boolean = false;
  disableSuccessModal: boolean = false;
  id:any

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

  sort(sortByValue:any){
    this.isAscending = !this.isAscending;
    if(!this.isAscending){
      return this.copyArray.sort((a:any,b:any)=>a[sortByValue].localeCompare(b[sortByValue]));
    }else{
      return this.copyArray.sort((a:any,b:any)=>b[sortByValue].localeCompare(a[sortByValue]));
    }
  }

  toggleStudent(student:any){
    student.isEnabled = !student.isEnabled;

    this.id = student.id
    
    let obj = {
      msg_flg:student.isEnabled
    }
    if(student.isEnabled == true){
      this.enableSuccessModal = true
      this.service.isStudentEnableSuccess(this.id,obj, (callback:any)=>{
        console.log(callback);
      })
    }else{
      this.disableSuccessModal = true
      this.service.isStudentDisabledSuccess(this.id,obj, (callback:any)=>{
        console.log(callback);
      })

    }
    

  }

}
