import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthServiceService } from '../authServices/auth-service.service';

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

  constructor (private Service:AuthServiceService , private _Route:Router){}






getInputValue(){
  this.loginObj = {
    email:this.email,
  }

  
  this.Service.checkForgetPassword(this.loginObj, (callback:any)=>{
  if(callback.status== 200){
    // this._Route.navigate(["/admin"])
    this.showModal = true
  }
    
  })

}
recoverPasaword(){
  this.forgetPass = {
    password: this.password,
    email:this.email
  }
  this.Service.saveNewPassword(this.forgetPass, (callback:any)=>{
    if(callback.status== 200){
      this._Route.navigate(["/admin"])
      this.showModal = false
    }
    
  })

}
}
