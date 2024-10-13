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
  isoTimestamp: any
  displayImg:any;


  
  selectedFile: File | null = null;
  imageUrl: string | ArrayBuffer | null = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];

    if (this.selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      
      reader.onload = () => {
        this.imageUrl = reader.result;
        console.log( this.imageUrl);
        
      };
    }
  }
  
  constructor(private _formBuilder:FormBuilder, private Service:AuthServiceService, private alertService:AlertService){
    this.isoTimestamp = new Date().toISOString();
    
    
    this.signUpForm = _formBuilder.group({
      name:[],
      email:[],
      password:[],
      rePassword:[],
      timeStamp:this.isoTimestamp
    })
  }  
  ngOnInit(){
this.Service.fetchAllData((callback:any)=>{
  this.displayImg = callback;
  
})

   
  }
  getregisterdValue(){
    this.Service.saveSignUpData(this.signUpForm.value, this.imageUrl,(callback:any)=>{
      if(callback.status == 200){
        this.alertService.success(callback.message, "Success",{displayDuration : 2000})


      }else{
        this.alertService.error(callback.message, "Error",{displayDuration : 2000})
      }
      

    })
    
    
  }

}
