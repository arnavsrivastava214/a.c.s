import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../authServices/auth-service.service';
import { AlertService } from 'src/app/shared/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: any;
  password: any;
  loginObj: any;

  constructor(private Service: AuthServiceService, private _Route: Router, private alertService: AlertService) { }

  getInputValue() {
    this.loginObj = {
      email: this.email,
      password: this.password
    }
    this.Service.savedLoginData(this.loginObj, (result: any) => {
      if (result.status == 200) {
        this.alertService.success(result.message, "Success", { displayDuration: 2000 })
        this.setUserIntoLocal(result.data)
        this._Route.navigate(['/admin']);
      } else {
        this.alertService.error(result.message, "Error", { displayDuration: 2000 })
      }
    })
    this.loginObj = {};
  }

  setUserIntoLocal(data:any){
    localStorage.setItem("user",JSON.stringify(data))
  }

}
