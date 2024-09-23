import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicRecordsRoutingModule } from './academic-records-routing.module';
import { AcademicRecordsComponent } from './academic-records.component';
import { SideBarModule } from "../../sharedComp/side-bar/side-bar.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AcademicRecordsComponent],
  imports: [
    CommonModule,
    AcademicRecordsRoutingModule,
    SideBarModule,
ReactiveFormsModule
,FormsModule

]
  ,exports:[
    AcademicRecordsComponent]
})
export class AcademicRecordsModule { }
