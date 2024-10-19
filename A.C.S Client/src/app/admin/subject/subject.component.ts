import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SubjectService } from './subject.service';
import { Call } from '@angular/compiler';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
  showModal: any = false;
  studentMarks: any
  studentsMarksDetails: any
  copyArray: any = []
  inputValues: any;
  id: any
  isEdit: any
  isSorted:any
  constructor(private _form: FormBuilder, private service: SubjectService) {

    this.studentMarks = _form.group({
      assign_class: [],
      subject: [],
      Ist_unit_min_marks: [],
      Ist_unit_max_marks: [],
      IInd_unit_min_marks: [],
      IInd_unit_max_marks: []

    })
  }
  ngOnInit() {
    this.fetchTeacherList();

  }



  fetchTeacherList() {
    this.service.fetchSubjectDetails((callback: any) => {
      this.studentsMarksDetails = callback;

      this.copyArray = [].concat(this.studentsMarksDetails)
    })
  }

  getsearchedValues(box: any) {
    let copy: any = [].concat(this.studentsMarksDetails)
    this.copyArray = copy.filter((e: any) => e.assign_class.includes(box.value));

  }

  addChild() {
    this.showModal = true;
    this.studentMarks.value = ''
  }
  getMarksValue() {
    console.log(this.studentMarks.value);

    this.showModal = false;
    if (this.isEdit) {
      this.service.editSubjectDetails(this.id, this.studentMarks.value, (res: any) => {
        if (res.status == 200) {
          this.isEdit = false;
          this.fetchTeacherList();
        }
      })

    } else {
      this.service.saveSubjectDetails(this.studentMarks.value, (res: any) => {
        if (res.status == 200) {
          this.fetchTeacherList();
        }

      })
    }
  }

  editValue(home: any) {
    this.id = home.id;
    this.studentMarks.patchValue(home)
    this.showModal = true
    this.isEdit = true;
  }

  deleteValue(item: any, idx: any) {

    this.id = item.id;


    this.service.deleteSubjectDetails(this.id, (callback: any) => {
      console.log(callback);

    })
    this.copyArray.splice(idx, 1)
  }
  closeModal() {
    this.showModal = false;
    this.studentMarks.reset();
  }

  sort(sortByValue:any){
    this.isSorted = !this.isSorted;
    if(!this.isSorted){
      return this.copyArray.sort((a:any,b:any)=>a[sortByValue].localeCompare(b[sortByValue]));
    }else{
      return this.copyArray.sort((a:any,b:any)=>b[sortByValue].localeCompare(a[sortByValue]));
    }
  }
}