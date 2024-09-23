import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicReportRoutingModule } from './academic-report-routing.module';
import { AcademicReportComponent } from './academic-report.component';
import { SideBarModule } from "../../../sharedComp/side-bar/side-bar.module";


@NgModule({
  declarations: [AcademicReportComponent],
  imports: [
    CommonModule,
    AcademicReportRoutingModule,
    SideBarModule
],
  exports:[
    AcademicReportComponent
  ]
})
export class AcademicReportModule { }
