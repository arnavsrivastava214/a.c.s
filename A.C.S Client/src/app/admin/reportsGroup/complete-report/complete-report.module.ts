import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompleteReportRoutingModule } from './complete-report-routing.module';
import { CompleteReportComponent } from './complete-report.component';
import { SideBarModule } from "../../../sharedComp/side-bar/side-bar.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CompleteReportComponent],
  imports: [
    CommonModule,
    CompleteReportRoutingModule,
    SideBarModule,
    FormsModule,
ReactiveFormsModule

],
  exports:[
    CompleteReportComponent
  ]
})
export class CompleteReportModule { }
