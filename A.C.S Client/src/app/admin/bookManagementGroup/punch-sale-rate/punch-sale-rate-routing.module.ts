import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PunchSaleRateComponent } from './punch-sale-rate.component';

const routes: Routes = [
  {
    path:'',
    component:PunchSaleRateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PunchSaleRateRoutingModule { }
