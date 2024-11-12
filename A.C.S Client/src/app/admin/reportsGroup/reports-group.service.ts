import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportsGroupService {

  url:any={
    'fetchCompleteReport':'http://localhost:3000/api/reportsGroup/fetchCompleteReport',
    'fetchCollectionReport':'http://localhost:3000/api/reportsGroup/fetchCollectionReport',
    'fetchCollectionAdmission':'http://localhost:3000/api/reportsGroup/fetchCollectionAdmission',
    'fetchCollectionStartEndDate':'http://localhost:3000/api/reportsGroup/fetchCollectionStartEndDate',
  }

  constructor(private http:HttpClient) { }

  fetchCompleteReport(result:any, callback:any){
   return this.http.post(this.url['fetchCompleteReport'], result).subscribe(res=>callback(res))
  }

  fetchCollectionReportByParticularDate(result:any, callback:any){
   return this.http.post(this.url['fetchCollectionReport'], result).subscribe(res=>callback(res))
  }

  fetchCollectionReportByAdmissionNumber(result:any, callback:any){
   return this.http.post(this.url['fetchCollectionAdmission'], result).subscribe(res=>callback(res))
  }

  fetchCollectionReportByStartEndDate(result:any, callback:any){
   return this.http.post(this.url['fetchCollectionStartEndDate'], result).subscribe(res=>callback(res))
  }
}
