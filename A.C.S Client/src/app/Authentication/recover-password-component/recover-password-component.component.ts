import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthServiceService } from '../authServices/auth-service.service';
import { AlertService } from 'src/app/shared/alert.service';
import { last } from 'rxjs';

@Component({
  selector: 'app-recover-password-component',
  templateUrl: './recover-password-component.component.html',
  styleUrls: ['./recover-password-component.component.css']
})
export class RecoverPasswordComponentComponent {

  email: any;
  loginObj: any;
  showModal: any = false;
  password: any;
  forgetPassObj: any;
  isoTimestamp: any;
  changePasswordModal: Boolean = false;
  rePassword: any;


  constructor(private Service: AuthServiceService, private _Route: Router, private alertService: AlertService) { }







  getInputValue() {
    this.loginObj = {
      email: this.email,
    }


    this.Service.checkForgetPassword(this.loginObj, (callback: any) => {
      if (callback.status == 200) {
        this.showModal = true
      } else {
        this.alertService.error(callback.message, "Error", { displayDuration: 2000 })
        this.showModal = false;


      }

    })

  }
  checkPassword() {
    this.isoTimestamp = new Date().toISOString();

    this.forgetPassObj = {
      oldpassword: this.password,
      email: this.email
    }

    this.Service.checkPasswordMatched(this.forgetPassObj, (callback: any) => {
      if (callback.status == 200) {
        this.showModal = false
        this.changePasswordModal = true
        this.getInputValue();
        this.password = "";
      } 
      else {
        this.alertService.error(callback.message, "Error", { displayDuration: 2000 })
        this.changePasswordModal = false
        
      }
    })
  }
  changePassord() {
    let changePasswordObj = {
      password: this.password,
      rePassword: this.rePassword,
      email: this.email,
      lastUpdate:this.isoTimestamp
    }

    if(this.password == this.rePassword){

      this.Service.saveNewPassword(changePasswordObj,(callback:any)=>{
        if(callback.status ==200){
          this.alertService.success("password Saved Succesfully", "Error", { displayDuration: 2000 })
          setTimeout(()=>{
            this._Route.navigate(['/']);
          },2000)
        }else{
          this.alertService.error(callback.message, "Error", { displayDuration: 2000 })
          this.changePasswordModal = false;
        }
      })
    }else{
      this.alertService.error("Your new passwords not matched !", "Error", { displayDuration: 2000 })

    }


  }
}
