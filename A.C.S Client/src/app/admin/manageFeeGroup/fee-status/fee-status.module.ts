import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeeStatusRoutingModule } from './fee-status-routing.module';
import { FeePaymentComponent } from '../fee-payment/fee-payment.component';
import { FeeStatusComponent } from './fee-status.component';
import { SideBarModule } from "../../../sharedComp/side-bar/side-bar.module";


@NgModule({
  declarations: [FeeStatusComponent],
  imports: [
    CommonModule,
    FeeStatusRoutingModule,
    SideBarModule
],
  exports:[
    FeeStatusComponent
  ]
})
export class FeeStatusModule { }
