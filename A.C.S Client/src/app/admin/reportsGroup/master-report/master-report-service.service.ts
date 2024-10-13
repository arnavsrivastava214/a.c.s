import { HttpClient } from '@angular/common/http';
import { Call } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterReportServiceService {

  url:any = "http://localhost:3000/api/masterreport/"

  constructor(private http:HttpClient) { }

  fetchStudentCredentialByStudentId(result:any,callback:any ){
    this.http.post(this.url+"fetchstudentscredential",result).subscribe(res=>callback(res))
  }

  editstudentCredentialById(result:any, id:any, calback:any){
    this.http.put(this.url+`editstudent/${id}`, result).subscribe(res=>calback(res));

  }
}
