import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnquiryServiceService {
  url:any= "http://localhost:3000/api/enquiry/"
  constructor(private http:HttpClient) { }

  insertEnquiryCredential(result:any, callback:any){
   return this.http.post(this.url+"insertenquiry",result).subscribe(res=>callback(res))
  }

  generateSession(): string {
    const currentYear = new Date().getFullYear();
    return `${currentYear}-${currentYear + 1}`;
  }
}
