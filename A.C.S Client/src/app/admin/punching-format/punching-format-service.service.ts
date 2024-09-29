import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PunchingFormatServiceService {

  constructor(private http:HttpClient) { }
  url:any= "http://localhost:3000/api/punchingformat/"

  fetchStudentCredBYId(result:any, callback:any){
    this.http.post(this.url+"fetchsstudentcred",result).subscribe(res=>callback(res));
  }}
