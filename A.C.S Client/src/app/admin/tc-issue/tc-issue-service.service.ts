import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TcIssueServiceService {

  url: any = "http://localhost:3000/api/tcissue/"

  constructor(private http:HttpClient) { }

  fetchStudentCredentialByClass(result:any, callback:any){
    this.http.post(this.url +'fetchtcissues', result).subscribe(res => callback(res));


  }

  editStudentCredential(id:any , result: any, callback: any) {
    this.http.put(`${this.url}editStudents/${id}`,result).subscribe(res => callback(res));
  }
}
