import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorPaymentRoutingModule } from './vendor-payment-routing.module';
import { VendorPaymentComponent } from './vendor-payment.component';
import { SideBarModule } from "../../../sharedComp/side-bar/side-bar.module";


@NgModule({
  declarations: [VendorPaymentComponent],
  imports: [
    CommonModule,
    VendorPaymentRoutingModule,
    SideBarModule
],
  exports:[
    VendorPaymentComponent
  ]
})
export class VendorPaymentModule { }
