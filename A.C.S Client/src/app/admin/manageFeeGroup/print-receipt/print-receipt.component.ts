import { Component } from '@angular/core';
import { BillAmendmentService } from '../bill-amendment/bill-amendment.service';

@Component({
  selector: 'app-print-receipt',
  templateUrl: './print-receipt.component.html',
  styleUrls: ['./print-receipt.component.css']
})
export class PrintReceiptComponent {

  receiptNumber:any='';
  showModal:boolean=false;
  receiptData:any={};
  showErrorModal:any = false

  constructor(private _service:BillAmendmentService){}

  printReceipt(divId:any){
    let params={
      enter_receipt:this.receiptNumber
    };
    this._service.printReceipt(params,(res:any)=>{
      if(res.status==200 && res.data.length>0){
        this.receiptData= res.data.map((item:any)=>{return {...item,fee:JSON.parse(item.fee)}})[0];
        this.showModal=true;
        setTimeout(() => {
          window.print();
        },500);
      }else{
        this.showErrorModal = true
        this.showModal = false
        this.receiptNumber = "";
      }
    });
  };

  closeModal(){
    this.showModal=false;
  }

}
