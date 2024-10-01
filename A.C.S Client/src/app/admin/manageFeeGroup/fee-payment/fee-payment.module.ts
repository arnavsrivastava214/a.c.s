import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeePaymentRoutingModule } from './fee-payment-routing.module';
import { FeePaymentComponent } from './fee-payment.component';
import { SideBarModule } from "../../../sharedComp/side-bar/side-bar.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FeePaymentComponent],
  imports: [
    CommonModule,
    FeePaymentRoutingModule,
    SideBarModule,
FormsModule,
ReactiveFormsModule


],
  exports:[
    FeePaymentComponent
  ]
})
export class FeePaymentModule { }
