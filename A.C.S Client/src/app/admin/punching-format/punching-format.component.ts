import { Component } from '@angular/core';
import { PunchingFormatServiceService } from './punching-format-service.service';
import { AlertService } from 'src/app/shared/alert.service';

@Component({
  selector: 'app-punching-format',
  templateUrl: './punching-format.component.html',
  styleUrls: ['./punching-format.component.css']
})
export class PunchingFormatComponent {
  admissionNO: any;
  showModal: any;
  showContent: any = false;
  stdData: any = [];
  todayDate: any = new Date();
  activeMonthFee: any = '';
  stdFeeConfig:any={};
  lastAdmissionNo:any;
  constructor(private service: PunchingFormatServiceService,private alert:AlertService) { }

ngOnInit(){
  setInterval(()=>{
    this.lastAdmissionNo = JSON.parse(<any>localStorage.getItem("lastAdmissionNo"));

  },1000)
}

  getAdmisssonId() {
    let obj: any = {
      StudentAdmId: this.admissionNO
    }
    this.service.fetchStudentCredBYId(obj, (callback: any) => {
      if (callback.status == 200 && callback.data.length > 0) {
        console.log(callback);
        
        callback.data.forEach((el:any)=>{
          let lastAdmissionNo =  el.admission_number;
          localStorage.setItem("lastAdmissionNo",JSON.stringify(lastAdmissionNo));
          

        })
        
        this.showModal = true
        this.stdData = callback.data[0];
        this.activeMonthFee = false;

      } else {
        this.showContent = true; 
        this.showModal = false;
      }
    })
  }

  updateStdDetail() {
    this.service.updateStdDetails(this.stdData, this.stdData.id, (res: any) => {
      if(res.status == 200){
        this.showModal = false;
        this.stdFeeConfig = {};
        this.stdData ={};
        this.alert.success('Details Updated Successfully');
      }
    })
  }


  setActiveMonth(month: any) {
    this.activeMonthFee = month;
  }

  payFee(){
   let totalFee =  this.getTotalFee();
    let params:any={
      month:this.activeMonthFee,
      total:totalFee,
      ...this.stdFeeConfig
    }
    this.service.payFee(params,this.stdData.id,(res:any)=>{
      if(res.status == 200){
        console.log(res);
        this.showModal = false;
        this.alert.success('Fee Updated Successfully');
      }
    })
  }

  getTotalFee() {
     return +this.stdFeeConfig.admission_fee + +this.stdFeeConfig.session_fee +
      +this.stdFeeConfig.tution_fee + +this.stdFeeConfig.fine +
      +this.stdFeeConfig.re_admission_fee + +this.stdFeeConfig.exam_fee+
      +this.stdFeeConfig.development_fee + +this.stdFeeConfig.activity_fee+
      +this.stdFeeConfig.computer_science_fee + +this.stdFeeConfig.other + +this.stdFeeConfig.other1;
  }

}
