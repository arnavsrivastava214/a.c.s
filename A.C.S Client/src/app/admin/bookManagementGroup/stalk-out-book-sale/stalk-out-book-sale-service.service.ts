import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StalkOutBookSaleServiceService {
  url:any= "http://localhost:3000/api/booksales/"

  constructor(private http:HttpClient) { }

  fetchBookSaleDetails(result:any, callback:any){
    this.http.post(this.url+"fetchbooksaledetails",result).subscribe(res=>callback(res));


  }
}
