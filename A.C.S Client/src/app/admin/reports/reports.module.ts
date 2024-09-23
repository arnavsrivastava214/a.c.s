import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { SideBarModule } from "../../sharedComp/side-bar/side-bar.module";


@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SideBarModule
],
  exports:[
    ReportsComponent
  ]
})
export class ReportsModule { }
