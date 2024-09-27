import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificateServiceService {

  constructor(private http:HttpClient) { }
  url:any= "http://localhost:3000/api/studentrecords/"

  fetchStudentCredBYId(result:any, callback:any){
    this.http.post(this.url+"fetchstdCredential",result).subscribe(res=>callback(res));
  }
}
