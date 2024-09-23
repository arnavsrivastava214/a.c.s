import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StkInBkRecdService {

  constructor(private http:HttpClient) { }
 url:any = 'http://localhost:3000/api/bookrecords/';

  saveBookRecords(res:any,callback:any){
    this.http.post(this.url+"savebookrecords",res).subscribe(res=>callback(res));
  }
  fetchBookRecords(callback:any){
    this.http.get(this.url+"savebookrecords").subscribe(res=>callback(res));
  }
  deleteDataFromteacher(id: any, callback: any) {
    this.http.delete(`${this.url}deletebookrecords/${id}`).subscribe(res => callback(res));
  }
  editDataFromBookRecords(id:any , result: any, callback: any) {
    this.http.put(`${this.url}editbookrecords/${id}`,result).subscribe(res => callback(res));
  }
}
