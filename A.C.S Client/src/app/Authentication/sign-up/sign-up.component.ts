import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthServiceService } from '../authServices/auth-service.service';
import { AlertService } from 'src/app/shared/alert.service';
4
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm:any;

  constructor(private _formBuilder:FormBuilder, private Service:AuthServiceService, private alertService:AlertService){
    this.signUpForm = _formBuilder.group({
      name:[],
      email:[],
      password:[],
      rePassword:[],
    })
  }  
  getregisterdValue(){
    this.Service.saveSignUpData(this.signUpForm.value,(callback:any)=>{
      if(callback.status == 200){
        this.alertService.success(callback.message, "Success",{displayDuration : 2000})


      }else{
        this.alertService.error(callback.message, "Error",{displayDuration : 2000})
      }
      

    })
    
    
  }

}
