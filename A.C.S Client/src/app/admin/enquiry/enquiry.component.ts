import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EnquiryServiceService } from './enquiry-service.service';
import { LoginComponent } from 'src/app/Authentication/login/login.component';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent {
  enquiryForm: any
  isoTimestamp: any
  session: string = '';


  constructor(private _fb: FormBuilder, private service: EnquiryServiceService) {
    this.isoTimestamp = new Date().toISOString();
    this.session = this.service.generateSession();

    this.enquiryForm = _fb.group({
      studentName: [],
      fname: [],
      contactNo: [],
      email: [],
      session: this.session,
      timestamp: this.isoTimestamp,

    })
  }


  getInputValue() {
    console.log(this.enquiryForm.value);
    
    this.service.insertEnquiryCredential(this.enquiryForm.value, (callback: any) => {
      console.log(callback);

    })
  }

}
