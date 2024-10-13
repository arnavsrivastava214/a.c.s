import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddServiceService {

  url:any= "http://localhost:3000/api/add/"
  constructor(private http:HttpClient) { }

  insertSchoolMessage(result:any, callback:any){
   return this.http.post(this.url+"addmessage",result).subscribe(res=>callback(res));
  }

  getAllMessage(callback:any){
    this.http.get(this.url+"fetchmessage").subscribe(res=>callback(res))
  }

  editMessageContentById(result:any, id:any, calback:any){
    this.http.put(this.url+`editmessage/${id}`, result).subscribe(res=>calback(res));

  }
  deleteMessageById(id: any, callback: any){
      this.http.delete(`${this.url}deletemessage/${id}`).subscribe(res => callback(res));
    }
  }