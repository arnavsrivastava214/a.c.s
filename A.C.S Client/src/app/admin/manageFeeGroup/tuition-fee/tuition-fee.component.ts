import { Component } from '@angular/core';
import { FeePaymentServiceService } from '../fee-payment/fee-payment-service.service';
import { TuitionFeeService } from './tuition-fee.service';

@Component({
  selector: 'app-tuition-fee',
  templateUrl: './tuition-fee.component.html',
  styleUrls: ['./tuition-fee.component.css']
})
export class TuitionFeeComponent {

  tutionFee:any=[];

  constructor(private service:TuitionFeeService){
    
  }

  searchFee(){
    this.service.fetchTutionFee({class:"LKG"},(res:any)=>{
      if(res.status == 200){
        this.tutionFee=res.data;
      }
    })
  }

}
