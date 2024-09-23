import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PunchingFormatRoutingModule } from './punching-format-routing.module';
import { PunchingFormatComponent } from './punching-format.component';
import { SideBarModule } from "../../sharedComp/side-bar/side-bar.module";


@NgModule({
  declarations: [PunchingFormatComponent],
  imports: [
    CommonModule,
    PunchingFormatRoutingModule,
    SideBarModule
],
  exports:[
    PunchingFormatComponent
  ]
})
export class PunchingFormatModule { }
