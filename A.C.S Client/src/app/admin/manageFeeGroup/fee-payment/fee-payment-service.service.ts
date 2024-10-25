import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeePaymentServiceService {
  url:any = 'http://localhost:3000/api/feepayment/';

  constructor(private http:HttpClient) { }

  fetchFeePaymentDetails(result:any, callback:any){
    this.http.post(this.url+"fetchfeedetails", result).subscribe(res=>callback(res));
  }

  PaidFeeByAdmin(id:any, result:any, callback:any){
    this.http.put(this.url+`updatefeedetails/`+id, result).subscribe(res=>callback(res));

  }
}
