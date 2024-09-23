import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { SideBarModule } from "../../sharedComp/side-bar/side-bar.module";


@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    SideBarModule
],
  exports:[AdminDashboardComponent]
})
export class AdminDashboardModule { }
