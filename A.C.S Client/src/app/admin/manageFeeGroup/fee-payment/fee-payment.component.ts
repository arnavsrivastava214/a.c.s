import { Component } from '@angular/core';
import { FeePaymentServiceService } from './fee-payment-service.service';
import { FormBuilder } from '@angular/forms';
import { group } from '@angular/animations';

@Component({
  selector: 'app-fee-payment',
  templateUrl: './fee-payment.component.html',
  styleUrls: ['./fee-payment.component.css']
})
export class FeePaymentComponent {
  feePayment: any;
  showDetails: any = false;
  showModal: any = false;
  displayData: any;
  feePayModal: any = false;
  copyArray: any = [];
  inputValues: any;
  isAscending: any;
  patchValueForm: any;
  PaidFeeForm: any;
  successModal: any = false;
  grandTotal: any;
  constructor(private service: FeePaymentServiceService, private _FB: FormBuilder) {

    this.patchValueForm = _FB.group({
      name: [],
      father_name: [],
      class: [],
      admission_number: []

    })

    this.PaidFeeForm = _FB.group({
      fee_date_nov: [],
      admission_fee: [],
      session_fee: [],
      tuition_fee: [],
      fine: [],
      ree_admission_fee: [],
      exam_fee: [],
      development_fee: [],
      activity_fee: [],
      computer_science_fee: [],
      other: [],
      other1: [],

    })


  }

  getSelctedValue() {
    let obj = {
      classfees: this.feePayment
    }
    this.service.fetchFeePaymentDetails(obj, (callback: any) => {

      if (callback.status == 200 && callback.data.length > 0) {
        this.displayData = callback.data
        this.copyArray = [].concat(this.displayData)

        this.showDetails = true
        console.log(callback.data);


      } else {
        this.showModal = true
        this.showDetails = false
      }

    })

  }


  getsearchedValues() {
    let copy: any = [].concat(this.displayData)

    this.copyArray = copy.filter((e: any) => e.name.includes(this.inputValues));

  }
  getPayment(payment: any) {
    this.feePayModal = true;
    this.patchValueForm.patchValue(payment)

  }




  closeFeePayContent() {
    this.feePayModal = false
    this.showDetails = false

  }



  sort() {
    this.isAscending = !this.isAscending;
    if (this.isAscending) {
      this.copyArray.sort((a: any, b: any) => a.admission_number.localeCompare(b.admission_number));
    } else {
      this.copyArray.sort((a: any, b: any) => b.admission_number.localeCompare(a.admission_number));
    }
  }

  getTotalFee() {
    this.grandTotal = this.PaidFeeForm.value.admission_fee + this.PaidFeeForm.value.session_fee +
    this.PaidFeeForm.value.tuition_fee + this.PaidFeeForm.value.fine +
    this.PaidFeeForm.value.ree_admission_fee + this.PaidFeeForm.value.exam_fee
    this.PaidFeeForm.value.development_fee + this.PaidFeeForm.value.activity_fee
    this.PaidFeeForm.value.computer_science_fee + this.PaidFeeForm.value.other + this.PaidFeeForm.value.other1;
    console.log(this.grandTotal);
    setTimeout(()=>{
      this.successModal = true;
      this.feePayModal = false;

    },1000)



  }

}


