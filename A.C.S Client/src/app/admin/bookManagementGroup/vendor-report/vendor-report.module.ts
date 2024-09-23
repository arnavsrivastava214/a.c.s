import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorReportRoutingModule } from './vendor-report-routing.module';
import { VendorPaymentComponent } from '../vendor-payment/vendor-payment.component';
import { VendorReportComponent } from './vendor-report.component';
import { SideBarModule } from "../../../sharedComp/side-bar/side-bar.module";


@NgModule({
  declarations: [VendorReportComponent],
  imports: [
    CommonModule,
    VendorReportRoutingModule,
    SideBarModule
],
  exports:[
    VendorReportComponent
  ]
})
export class VendorReportModule { }
