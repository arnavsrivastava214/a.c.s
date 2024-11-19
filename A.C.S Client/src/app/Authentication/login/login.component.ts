import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../authServices/auth-service.service';
import { AlertService } from 'src/app/shared/alert.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj: any;
  loginForm:any

  constructor(private Service: AuthServiceService, private _Route: Router, private alertService: AlertService, private formBuilder:FormBuilder) { 

    this.loginForm = this.formBuilder.group({
      email: [
        '', // Default value
        [
          Validators.required,    // Field is required
          Validators.email        // Must be a valid email format
        ]
      ],
      password: [
        '', // Default value
        [
          Validators.required,    // Field is required
          Validators.minLength(6) // Password must be at least 6 characters
        ]
      ]
    });
    
  }
  hasError(controlName: string, errorName: string): boolean {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  getInputValue() {
    this.Service.savedLoginData(this.loginForm.value, (result: any) => {
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
