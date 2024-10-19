import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddServiceService } from './add-service.service';
import { Call } from '@angular/compiler';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  showModal:any = false;
  stafform:any; 
  isoTimestamp:any
  copyArray:any = []
  displayData:any
  inputValues:any
  isAscending:any
  editModal:any = false
  editForm:any
  id:any

  constructor (private _fb:FormBuilder, private service:AddServiceService){
    this.stafform = _fb.group({
      message_title:[],
      message_body:[],
      user_id:[],

    })

    this.editForm = _fb.group({
      message_title:[],
      message_body:[],
      user_id:[],
    })
  }

  ngOnInit(){
    this.service.getAllMessage((calback:any)=>{
      console.log(calback);
      
      this.displayData = calback.data;

      

      this.copyArray = [].concat(this.displayData)
      console.log(this.copyArray);
      


    })
  }
  addstaff(){
    this.showModal = true;
  }
  addMessage(){
    this.service.insertSchoolMessage(this.stafform.value,(calback:any)=>{
    })

  }
  getsearchedValues() {
    let copy: any = [].concat(this.displayData)

    this.copyArray = copy.filter((e: any) => e.message_body.includes(this.inputValues));

  }

  sort(sortByValue:any){
    this.isAscending = !this.isAscending;
    if(!this.isAscending){
      return this.copyArray.sort((a:any,b:any)=>a[sortByValue].localeCompare(b[sortByValue]));
    }else{
      return this.copyArray.sort((a:any,b:any)=>b[sortByValue].localeCompare(a[sortByValue]));
    }
  }

  editAddedValues(obj:any){

    this.id = obj.message_id;
    console.log(this.id);
    
    this.editModal = true
    this.editForm.patchValue(obj)
    
    

  }

  deleteAddedValues(message:any, idx:any){
    console.log(message.message_id);
    
    
    this.service.deleteMessageById(message.message_id, (callback:any)=>{
      console.log(callback);
      
    })
    this.copyArray.splice(idx,1)

  }

  editDataBase(){

    this.service.editMessageContentById(this.editForm.value,this.id,(callback:any)=>{
      
    } )


    this.editForm.reset();
    this.editModal = false


  }


}
