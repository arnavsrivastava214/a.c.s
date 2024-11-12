import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillAmendmentRoutingModule } from './bill-amendment-routing.module';
import { BillAmendmentComponent } from './bill-amendment.component';
import { SideBarModule } from "../../../sharedComp/side-bar/side-bar.module";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BillAmendmentComponent
  ],
  imports: [
    CommonModule,
    BillAmendmentRoutingModule,
    SideBarModule,
    FormsModule
],
  exports:[
    BillAmendmentComponent

  ]
})
export class BillAmendmentModule { }
