import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillAmendmentService {

  url:any={
    'fetchBill':'http://localhost:3000/api/billamendment/fetchbillamendment',
    'printBill':'http://localhost:3000/api/billamendment/printbillamendment',
  };

  constructor(private http:HttpClient) { }

  
  fetchBillAmendment(params:any,callback:any){
    return this.http.post(this.url['fetchBill'],params).subscribe(res=>callback(res))
  }

  printReceipt(params:any,callback:any){
    return this.http.post(this.url['printBill'],params).subscribe(res=>callback(res))

  }

}
