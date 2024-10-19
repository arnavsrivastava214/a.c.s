import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthServiceService } from '../authServices/auth-service.service';
import { AlertService } from 'src/app/shared/alert.service';
import { NgxImageCompressService } from 'ngx-image-compress';
import { HttpClient } from '@angular/common/http';

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


    this.signUpForm = _formBuilder.group({
      name: [],
      email: [],
      password: [],
      rePassword: [],
      timeStamp: this.isoTimestamp
    })
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
    this.Service.saveSignUpData(this.signUpForm.value, this.compressedImageUrl, (callback: any) => {
      if (callback.status == 200) {
        this.alertService.success(callback.message, "Success", { displayDuration: 2000 })
        console.log(callback);



      } else {
        this.alertService.error(callback.error, "Error", { displayDuration: 2000 })

      }


    })


  }

}
