import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcademicreportService {
  url:any = 'http://localhost:3000/api/academicreports/';

  constructor(private http:HttpClient) { 
  }
  fetchStudentDetailsByClass(result:any, callback:any){
    this.http.post(this.url+"fetchstudentscredentials", result).subscribe(res=>callback(res))
    
  }
}
