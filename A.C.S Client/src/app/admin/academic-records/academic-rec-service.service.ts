import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcademicRecServiceService {
  url:any = 'http://localhost:3000/api/academicrecords/';
  constructor(private http:HttpClient) { }

  fetchstudentRecords(getStudentId:any , callback:any){
    this.http.post(this.url+'academicrecords',getStudentId).subscribe(res=>callback(res));
  }
}
