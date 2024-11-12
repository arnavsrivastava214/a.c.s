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

  constructor(private _service:BillAmendmentService){}

  printReceipt(divId:any){
    let params={
      enter_receipt:this.receiptNumber
    };
    this._service.printReceipt(params,(res:any)=>{
      if(res.status==200){
        this.receiptData= res.data.map((item:any)=>{return {...item,fee:JSON.parse(item.fee)}})[0];
        console.log(this.receiptData);
        
        this.showModal=true;
        setTimeout(() => {
          // let printContents:any = document.getElementById(divId);
          // let originalContents:any = document.body.innerHTML;
          // document.body.innerHTML = printContents;
          window.print();
          // document.body.innerHTML = originalContents;
        },500);
      }
    });
  };

  closeModal(){
    this.showModal=false;
  }

}
