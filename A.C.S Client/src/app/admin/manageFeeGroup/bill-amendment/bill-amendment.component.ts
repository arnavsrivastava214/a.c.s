import { Component } from '@angular/core';
import { BillAmendmentService } from './bill-amendment.service';

@Component({
  selector: 'app-bill-amendment',
  templateUrl: './bill-amendment.component.html',
  styleUrls: ['./bill-amendment.component.css']
})
export class BillAmendmentComponent {
  isVisible: boolean = false;
  receiptNumber:any='';
  showReciptInput:boolean=false;
  showModal:boolean=false;
  successModal:boolean=false;
  billDetailModal:boolean=false;
  billData:any={};

  constructor(private _service:BillAmendmentService){}

  showReciptBox(){
    this.showReciptInput=true;
    this.showModal=true;
    this.successModal=true;
  }

  searchBillAmendment(){
    let params={
      enter_receipt:this.receiptNumber
    }
    this._service.fetchBillAmendment(params,(response:any)=>{
      if(response.status==200){
        this.billDetailModal=true;
        this.showModal=true;
        this.successModal=false;
        this.billData = response.data.map((item:any)=>{return {...item,fee:JSON.parse(item.fee)}})[0];
        console.log(this.billData);
        
      } 
    })
  }

  closeModal(){
    this.billDetailModal=false;
    this.showModal=false;
    this.showReciptInput=false;
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
  }
