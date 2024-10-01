import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthServiceService } from '../authServices/auth-service.service';
import { AlertService } from 'src/app/shared/alert.service';

@Component({
  selector: 'app-recover-password-component',
  templateUrl: './recover-password-component.component.html',
  styleUrls: ['./recover-password-component.component.css']
})
export class RecoverPasswordComponentComponent {

  email:any;
  loginObj:any;
  showModal:any = false;
  password:any 
  forgetPass:any


  constructor (private Service:AuthServiceService , private _Route:Router, private alertService:AlertService){}






getInputValue(){
  this.loginObj = {
    email:this.email,
  }

  
  this.Service.checkForgetPassword(this.loginObj, (callback:any)=>{
  if(callback.status== 200){
    this.showModal = true
  }else{
    this.alertService.error(callback.message, "Error",{displayDuration : 2000})

  }
    
  })

}
recoverPassword(){
  this.forgetPass = {
    password: this.password,
    email:this.email
  }

  console.log(this.password.length);
  
  

  this.Service.saveNewPassword(this.forgetPass, (callback:any)=>{
    
    if(callback.status== 200 && this.password.length>0){
      this._Route.navigate(["/admin"])
      this.showModal = false
      this.alertService.success(callback.message, "Success",{displayDuration : 2000})

    }else{
      this.alertService.error(callback.message, "Error",{displayDuration : 2000})
      this.showModal = false

    }
    
  })

}
}
