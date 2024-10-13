import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeeStatusRoutingModule } from './fee-status-routing.module';
import { FeeStatusComponent } from './fee-status.component';
import { SideBarModule } from "../../../sharedComp/side-bar/side-bar.module";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FeeStatusComponent],
  imports: [
    CommonModule,
    FeeStatusRoutingModule,
    SideBarModule,
FormsModule

],
  exports:[
    FeeStatusComponent
  ]
})
export class FeeStatusModule { }
