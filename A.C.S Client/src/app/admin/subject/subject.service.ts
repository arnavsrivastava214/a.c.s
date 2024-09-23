import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }
  url: any = "http://localhost:3000/api/subjectdetails/"
  saveSubjectDetails(result: any, callback: any) {
    this.http.post(this.url + 'savesubjectcredential', result).subscribe(res => callback(res));
  }
  fetchSubjectDetails( callback: any) {
    this.http.get(this.url + 'fetchSubjectcredential').subscribe(res => callback(res));
  }
  deleteSubjectDetails(id:any ,callback: any) {
    this.http.get(this.url + `deleteSubjectcredential/${id}`).subscribe(res => callback(res));
  }
  editSubjectDetails(id:any , result: any, callback: any) {
    this.http.put(`${this.url}editSubjectcredential/${id}`,result).subscribe(res => callback(res));
  }
}
