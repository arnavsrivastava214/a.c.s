import { Component } from '@angular/core';
import { PunchingFormatServiceService } from './punching-format-service.service';

@Component({
  selector: 'app-punching-format',
  templateUrl: './punching-format.component.html',
  styleUrls: ['./punching-format.component.css']
})
export class PunchingFormatComponent {
  admissionNO: any;
  showModal: any
  showContent: any
  stdData:any=[];
  constructor(private service: PunchingFormatServiceService) { }



  getAdmisssonId() {
    let obj: any = {
      StudentAdmId: this.admissionNO
    }
    this.service.fetchStudentCredBYId(obj, (callback: any) => {
      if (callback.status == 200 && callback.data.length > 0) {
        this.showModal = true
        this.showContent = true
        console.log(callback);
        this.stdData = callback.data[0];
        console.log(this.stdData);
        
      } else {
        this.showContent = false;
        this.showModal = true;

      }


    })


  }

}
