import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseReportRoutingModule } from './purchase-report-routing.module';
import { PurchaseReportComponent } from './purchase-report.component';
import { SideBarModule } from "../../../sharedComp/side-bar/side-bar.module";


@NgModule({
  declarations: [PurchaseReportComponent],
  imports: [
    CommonModule,
    PurchaseReportRoutingModule,
    SideBarModule
],
  exports:[
    PurchaseReportComponent
  ]
})
export class PurchaseReportModule { }
