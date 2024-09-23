import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnquiryRoutingModule } from './enquiry-routing.module';
import { EnquiryComponent } from './enquiry.component';
import { SideBarModule } from "../../sharedComp/side-bar/side-bar.module";


@NgModule({
  declarations: [EnquiryComponent],
  imports: [
    CommonModule,
    EnquiryRoutingModule,
    SideBarModule
],
  exports:[
    EnquiryComponent
  ]
})
export class EnquiryModule { }
