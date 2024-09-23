import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthServiceService } from '../authServices/auth-service.service';
4
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm:any;

  constructor(private _formBuilder:FormBuilder, private Service:AuthServiceService){
    this.signUpForm = _formBuilder.group({
      name:[],
      email:[],
      password:[],
      rePassword:[],
    })
  }  
  getregisterdValue(){
    this.Service.saveSignUpData(this.signUpForm.value,(callback:any)=>{
      console.log(callback);
      

    })
    
    
  }

}
