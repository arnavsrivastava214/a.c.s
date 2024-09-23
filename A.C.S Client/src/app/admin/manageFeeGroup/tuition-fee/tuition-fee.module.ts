import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuitionFeeRoutingModule } from './tuition-fee-routing.module';
import { TuitionFeeComponent } from './tuition-fee.component';
import { SideBarModule } from "../../../sharedComp/side-bar/side-bar.module";


@NgModule({
  declarations: [TuitionFeeComponent],
  imports: [
    CommonModule,
    TuitionFeeRoutingModule,
    SideBarModule
],
  exports:[
    TuitionFeeComponent
  ]
})
export class TuitionFeeModule { }
