import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TuitionFeeService {

  url:any={
    'fetchTutionFee':'http://localhost:3000/api/fetchtutionfee'
  }

  constructor(private http:HttpClient) { }

  fetchTutionFee(params:any,callback?:any){
    return this.http.post(this.url['fetchTutionFee'],params).subscribe(res=>callback(res))
  }


}
