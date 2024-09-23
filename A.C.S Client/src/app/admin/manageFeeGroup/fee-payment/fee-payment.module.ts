import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeePaymentRoutingModule } from './fee-payment-routing.module';
import { FeePaymentComponent } from './fee-payment.component';
import { SideBarModule } from "../../../sharedComp/side-bar/side-bar.module";


@NgModule({
  declarations: [FeePaymentComponent],
  imports: [
    CommonModule,
    FeePaymentRoutingModule,
    SideBarModule
],
  exports:[
    FeePaymentComponent
  ]
})
export class FeePaymentModule { }
