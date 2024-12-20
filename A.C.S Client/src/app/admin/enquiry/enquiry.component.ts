import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EnquiryServiceService } from './enquiry-service.service';
import { LoginComponent } from 'src/app/Authentication/login/login.component';
import { AlertService } from 'src/app/shared/alert.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent {
  enquiryForm: any
  isoTimestamp: any
  session: string = '';


  constructor(private _fb: FormBuilder, private service: EnquiryServiceService, private alertService:AlertService) {
    this.isoTimestamp = new Date().toISOString();
    this.session = this.service.generateSession();

      this.enquiryForm = _fb.group({
        studentName: ['', [Validators.required, Validators.minLength(3)]],
        fname: ['', [Validators.required, Validators.minLength(3)]], 
        contactNo: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]], 
        email: ['', [Validators.required, Validators.email]],
        session: this.session,
      timestamp: this.isoTimestamp,
      });
      

  }


  getInputValue() {
    
    this.service.insertEnquiryCredential(this.enquiryForm.value, (callback: any) => {
      if(callback.status == 200){
        this.alertService.success(callback.message, "Success",{displayDuration : 2000})
        this.enquiryForm.reset();


      }else{
        this.alertService.error( callback.error, "Error",{displayDuration : 2000})
        this.enquiryForm.reset();


      }

    })
  }

}
