import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddMessageService {

  url:any={
    'addMessage':'http://localhost:3000/api/message/addMessage',
    'getMessage':'http://localhost:3000/api/message/getMessage',
    'editMessage':'http://localhost:3000/api/message/editMessage',
    'deleteMessage':'http://localhost:3000/api/message/deleteMessage',
    
  }

  constructor(private http:HttpClient) { }

  addMessage(params:any,callback:any){
    return this.http.post(this.url['addMessage'],params).subscribe(res=>callback(res))
  }

  getMessage(callback:any){
    return this.http.get(this.url['getMessage']).subscribe(res=>callback(res))
  }

  editMessage(params:any,callback:any){
    return this.http.put(this.url['editMessage'],params).subscribe(res=>callback(res))
  }

  deleteMessageById(params:any,callback:any){
    return this.http.delete(`${this.url['deleteMessage']}/${params}`).subscribe(res=>callback(res))

  }


}
