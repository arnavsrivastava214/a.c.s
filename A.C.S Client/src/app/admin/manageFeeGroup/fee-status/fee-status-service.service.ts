import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeeStatusServiceService {
  url:any = 'http://localhost:3000/api/feestatus/';

  constructor(private http:HttpClient) { }

  fetchFeePaymentDetails(result:any, callback:any){
    this.http.post(this.url+"fetchfeestatus", result).subscribe(res=>callback(res));
  }


}
