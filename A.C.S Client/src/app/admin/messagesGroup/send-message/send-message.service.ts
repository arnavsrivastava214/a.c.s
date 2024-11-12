import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {
  url: any = {
    'getMessage': 'http://localhost:3000/api/message/getMessage',
  }
  constructor(private http: HttpClient) { }

  getMessage(callback: any) {
    return this.http.get(this.url['getMessage']).subscribe(res => callback(res))
  }

}

