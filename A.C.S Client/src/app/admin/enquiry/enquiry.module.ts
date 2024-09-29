import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnquiryRoutingModule } from './enquiry-routing.module';
import { EnquiryComponent } from './enquiry.component';
import { SideBarModule } from "../../sharedComp/side-bar/side-bar.module";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EnquiryComponent],
  imports: [
    CommonModule,
    EnquiryRoutingModule,
    SideBarModule,
ReactiveFormsModule

],
  exports:[
    EnquiryComponent
  ]
})
export class EnquiryModule { }
