import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }
  url: any = "http://localhost:3000/api/auth/";

  user = new BehaviorSubject<any>(null)

  saveSignUpData(result: any, callback: any) {
    this.http.post(this.url + "signUp", result).subscribe(res => callback(res));
  }
  savedLoginData(result: any, callback: any) {
    this.http.post(this.url + 'login', result).subscribe(res => callback(res))
  }

  checkForgetPassword(result: any, callback: any) {
    this.http.post(this.url + "recoverpassword", result).subscribe(res => callback(res))
  }
  saveNewPassword(result:any, callback:any){
    this.http.post(this.url + "newPassword", result).subscribe(res => callback(res))

  }

}
