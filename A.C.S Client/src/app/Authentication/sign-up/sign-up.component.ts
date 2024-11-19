import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from '../authServices/auth-service.service';
import { AlertService } from 'src/app/shared/alert.service';
import { NgxImageCompressService } from 'ngx-image-compress';
import { HttpClient } from '@angular/common/http';
import { timestamp } from 'rxjs';

4
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm: any;
  isoTimestamp: any
  displayImg: any;



  selectedFile: any | null = null;
  imageUrl: any | ArrayBuffer | null = null;
  compressedImageUrl: any | null = null;
  constructor(private _formBuilder: FormBuilder, private Service: AuthServiceService, private alertService: AlertService, private http: HttpClient, private imageCompress: NgxImageCompressService) {
    this.isoTimestamp = new Date().toISOString();


    this.signUpForm = this._formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        rePassword: ['', [Validators.required]],
        timeStamp:this.isoTimestamp
      },
    );
  }

 

  // Getter methods for easy access in the template
  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get rePassword() {
    return this.signUpForm.get('rePassword');
  }

  // Handle form submission
  onSubmit() {
    if (this.signUpForm.valid) {
      console.log('Form Submitted', this.signUpForm.value);
    } else {
      console.log('Form is invalid');
      this.signUpForm.markAllAsTouched();
    }
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];

    if (this.selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);

      reader.onload = () => {
        this.imageUrl = reader.result;
        console.log(this.imageUrl);
        this.compressImage();
      };
    }
  }

  compressImage() {
    if (this.imageUrl) {
      const orientation = 1;

      this.imageCompress.compressFile(this.imageUrl, orientation, 20, 20)
        .then(result => {
          console.log(this.imageUrl);
          
          this.compressedImageUrl = result;
          console.log('Compressed image URL:', this.compressedImageUrl);
        })
        .catch(error => {
          console.error('Error compressing the image:', error);
        });
    }
  }


  ngOnInit() {
    this.Service.fetchAllData((callback: any) => {
      this.displayImg = callback;
      this.compressImage();


    })


  }
  getregisterdValue() {
  if(this.signUpForm.value.password == this.signUpForm.value.rePassword){
    this.Service.saveSignUpData(this.signUpForm.value, this.compressedImageUrl, (callback: any) => {
      if (callback.status == 200) {
        this.alertService.success(callback.message, "Success", { displayDuration: 2000 })
        console.log(callback);
        
        
        
      } else {
        this.alertService.error(callback.error, "Error", { displayDuration: 2000 })
        
      }
      
      
    })
  }
  else{
    this.alertService.error("your Passwords not matched !", "Error", { displayDuration: 2000 })
 
   }


  }

}
