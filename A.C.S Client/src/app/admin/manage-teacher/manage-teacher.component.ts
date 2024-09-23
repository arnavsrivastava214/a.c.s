import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ManageTeacherServiceService } from './manage-teacher-service.service';

@Component({
  selector: 'app-manage-teacher',
  templateUrl: './manage-teacher.component.html',
  styleUrls: ['./manage-teacher.component.css']
})
export class ManageTeacherComponent {
  displayTeacherList: any = []
  formText: any
  showModal: any = false;
  isEdit: any = false;
  inputValues: any
  id: any;
  copyArray: any = [];
  constructor(private _fromBUuilder: FormBuilder, private service: ManageTeacherServiceService) {
    this.formText = _fromBUuilder.group({
      name: [],
      email: [],
      address: [],
      mobile: [],
      subject: [],
      assignclass: []
    })

  }
  ngOnInit() {
    this.fetchTeacherList();

  }



  fetchTeacherList() {
    this.service.getData((callback: any) => {
      this.displayTeacherList = callback;

      this.copyArray = [].concat(this.displayTeacherList)
    })
  }

  getsearchedValues() {
    let copy: any = [].concat(this.displayTeacherList)

    this.copyArray = copy.filter((e: any) => e.name.includes(this.inputValues));

  }


  deleteValue(item: any, idx: any) {

    this.id = item.id


    this.service.deleteDataFromteacher(item.id, (callback: any) => {
      console.log(callback);

    })
    this.copyArray.splice(idx, 1)
  }

  getInputValue() {

    if (this.isEdit) {
      this.service.editDataFromteacher(this.id, this.formText.value, (res: any) => {
        if (res.status == 200) {
          this.isEdit = false;
          this.fetchTeacherList();
        }
      })

    } else {
      this.service.postData(this.formText.value, (res: any) => {
        if (res.status == 200) {
          this.fetchTeacherList();
        }

      })
    }

    this.showModal = false;

  }
  editValue(home: any) {
    this.id = home.id;
    this.formText.patchValue(home)
    this.showModal = true
    this.isEdit = true;
  }


  getTeacherInput() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
}
