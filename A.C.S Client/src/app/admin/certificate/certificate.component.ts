import { Component } from '@angular/core';
import { CertificateServiceService } from './certificate-service.service';
import { getLocaleFirstDayOfWeek } from '@angular/common';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent {
  admissionId:any
  showContent:any = false
  displayCredential:any
  showModal:any = false
  constructor(private service:CertificateServiceService){}
 

  getAdmisssonId(){

    let obj:any= {
      StudentAdmId:this.admissionId
    }
    this.service.fetchStudentCredBYId(obj, (callback:any)=>{
      if(callback.status == 200 && callback.data.length>0){
        this.showContent = true
        console.log(callback);
        this.displayCredential = callback.data;
      }else{
        this.showContent = false;
        this.showModal = true;       

      }
      

    })
    
  }

  printCertificate() {
    window.print();
  }


}
