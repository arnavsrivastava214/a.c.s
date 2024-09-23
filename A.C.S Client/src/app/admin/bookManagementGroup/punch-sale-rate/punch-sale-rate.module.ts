import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PunchSaleRateRoutingModule } from './punch-sale-rate-routing.module';
import { PunchSaleRateComponent } from './punch-sale-rate.component';
import { SideBarModule } from "../../../sharedComp/side-bar/side-bar.module";


@NgModule({
  declarations: [PunchSaleRateComponent],
  imports: [
    CommonModule,
    PunchSaleRateRoutingModule,
    SideBarModule
],
  exports:[
    PunchSaleRateComponent
  ]
})
export class PunchSaleRateModule { }
