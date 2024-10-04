import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  url:any= "http://localhost:3000/api/studentreports/"

  constructor(private http:HttpClient) { }

  fetchBookSaleDetailsByStudentClass(result:any, callback:any){
    this.http.post(this.url+"fetchstudentreports",result).subscribe(res=>callback(res));

    

  }
}
