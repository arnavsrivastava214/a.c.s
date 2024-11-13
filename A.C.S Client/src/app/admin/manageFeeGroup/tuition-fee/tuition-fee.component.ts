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
  dateObj:any={stdate:'',enddate:''};
  assignClass:any='';

  constructor(private service:TuitionFeeService){
    
  }

  searchFee(){
    this.service.fetchTutionFee({assign_class:this.assignClass,stdate:this.dateObj.stdate,enddate:this.dateObj.enddate},(res:any)=>{
      if(res.status == 200){
        this.tutionFee=res.data.map((item:any)=>{return{...item,fee:JSON.parse(item.fee)}});
        console.log(this.tutionFee);
        
      }
    })
  }

}
