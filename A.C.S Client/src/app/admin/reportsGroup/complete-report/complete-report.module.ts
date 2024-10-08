import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompleteReportRoutingModule } from './complete-report-routing.module';
import { CompleteReportComponent } from './complete-report.component';
import { SideBarModule } from "../../../sharedComp/side-bar/side-bar.module";


@NgModule({
  declarations: [CompleteReportComponent],
  imports: [
    CommonModule,
    CompleteReportRoutingModule,
    SideBarModule
],
  exports:[
    CompleteReportComponent
  ]
})
export class CompleteReportModule { }
