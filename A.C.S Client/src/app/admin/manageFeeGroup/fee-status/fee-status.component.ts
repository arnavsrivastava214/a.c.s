import { Component } from '@angular/core';
import { FeeStatusServiceService } from './fee-status-service.service';

@Component({
  selector: 'app-fee-status',
  templateUrl: './fee-status.component.html',
  styleUrls: ['./fee-status.component.css']
})
export class FeeStatusComponent {
  getClass:any;
  showContent:any = false
  showModal :any = false;
  displayData:any
  copyArray:any = []
  inputValues:any;
  isAscending:any
  constructor (private service:FeeStatusServiceService){}

  getStudentClass(){
    let obj= {
     class_assign:this.getClass
    }

    this.service.fetchFeePaymentDetails(obj, (callback:any)=>{
      console.log(callback.data);
      
      if(callback.status == 200 && callback.data.length>0){
        this.showContent = true;
        this.displayData = callback.data
        this.copyArray = [].concat(this.displayData)

      }else{
        this.showModal = true;
        this.showContent = false;

      }
      
    })
    
  }

  getsearchedValues() {
    let copy: any = [].concat(this.displayData)

    this.copyArray = copy.filter((e: any) => e.name.includes(this.inputValues));

  }
  sort() {
    this.isAscending = !this.isAscending;
    if (this.isAscending) {
      this.copyArray.sort((a: any, b: any) => a.admission_number.localeCompare(b.admission_number));
    } else {
      this.copyArray.sort((a: any, b: any) => b.admission_number.localeCompare(a.admission_number));
    }
  }

}
