import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillAmendmentRoutingModule } from './bill-amendment-routing.module';
import { BillAmendmentComponent } from './bill-amendment.component';
import { SideBarModule } from "../../../sharedComp/side-bar/side-bar.module";


@NgModule({
  declarations: [
    BillAmendmentComponent
  ],
  imports: [
    CommonModule,
    BillAmendmentRoutingModule,
    SideBarModule
],
  exports:[
    BillAmendmentComponent

  ]
})
export class BillAmendmentModule { }
