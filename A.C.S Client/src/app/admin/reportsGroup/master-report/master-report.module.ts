import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterReportRoutingModule } from './master-report-routing.module';
import { MasterReportComponent } from './master-report.component';
import { SideBarModule } from "../../../sharedComp/side-bar/side-bar.module";


@NgModule({
  declarations: [MasterReportComponent],
  imports: [
    CommonModule,
    MasterReportRoutingModule,
    SideBarModule
],
  exports:[
    MasterReportComponent
  ]
})
export class MasterReportModule { }
