import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageTeacherRoutingModule } from './manage-teacher-routing.module';
import { ManageTeacherComponent } from './manage-teacher.component';
import { SideBarModule } from "../../sharedComp/side-bar/side-bar.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ManageTeacherComponent],
  imports: [
    CommonModule,
    ManageTeacherRoutingModule,
    SideBarModule,
ReactiveFormsModule,
FormsModule


],
  exports:[
    ManageTeacherComponent
  ]
})
export class ManageTeacherModule { }
