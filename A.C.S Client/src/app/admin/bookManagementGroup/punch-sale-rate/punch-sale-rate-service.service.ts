import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PunchSaleRateServiceService {

  constructor(private http:HttpClient) { }
  url:any= "http://localhost:3000/api/bookrecords/"


  fetchBookRecordsByBookCode(result:any, callback:any){
    this.http.post(this.url+"fetchbookdetails",result).subscribe(res=>callback(res));
  }
  fetchAllBookRecordsByBookCode( callback:any){
    this.http.get(this.url+"fetchallbookdetails").subscribe(res=>callback(res));
  }

}
    

