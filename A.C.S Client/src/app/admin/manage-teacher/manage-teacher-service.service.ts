import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageTeacherServiceService {

  constructor(private http:HttpClient) { }
  url:any = 'http://localhost:3000/api/teacher/';

  postData(result:any, callback:any){
    this.http.post(this.url+'createTeacher',result).subscribe(res=>callback(res));
    
  }
  getData(callback:any){
    this.http.get(this.url+'getTeacher').subscribe(res=>callback(res));
  }
  deleteDataFromteacher(id: any, callback: any) {
    this.http.delete(`${this.url}deleteteacher/${id}`).subscribe(res => callback(res));
  }
  editDataFromteacher(id:any , result: any, callback: any) {
    this.http.put(`${this.url}editTeacher/${id}`,result).subscribe(res => callback(res));
  }
  
}
