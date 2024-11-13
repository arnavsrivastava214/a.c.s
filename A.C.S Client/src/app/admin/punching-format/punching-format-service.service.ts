import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PunchingFormatServiceService {

  constructor(private http:HttpClient) { }
  url:any= "http://localhost:3000/api/punchingformat/"

  fetchStudentCredBYId(result:any, callback:any){
   return this.http.post(this.url+"fetchsstudentcred",result).subscribe(res=>callback(res));
  }

  payFee(params:any,stdId:any,callback:any){
    return this.http.put(this.url+'payFee/'+stdId,params).subscribe(res=>callback(res));
  }

  updateStdDetails(params:any,stdId:any,callback:any){
    return this.http.put(this.url+'updateStdDetails/'+stdId,params).subscribe(res=>callback(res));
  }

}
