import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorPaymentComponent } from '../vendor-payment/vendor-payment.component';

const routes: Routes = [
  {
    path:'',
    component:VendorPaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorReportRoutingModule { }
