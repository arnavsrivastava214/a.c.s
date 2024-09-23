import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeePaymentComponent } from './fee-payment.component';

const routes: Routes = [
  {
    path:'',
    component:FeePaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeePaymentRoutingModule { }
