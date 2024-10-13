import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarServiceService {
  url:any = 'http://localhost:3000/api/profile/';

  constructor(private http:HttpClient) { }

  // fetchProfieImageByUserTable(callback:any){
  //   this.http.get(this.url+'fetchprofileurl').subscribe(res=>callback(res));


  // }

}
