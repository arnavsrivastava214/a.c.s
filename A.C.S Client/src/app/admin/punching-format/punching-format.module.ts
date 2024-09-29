import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PunchingFormatRoutingModule } from './punching-format-routing.module';
import { PunchingFormatComponent } from './punching-format.component';
import { SideBarModule } from "../../sharedComp/side-bar/side-bar.module";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PunchingFormatComponent],
  imports: [
    CommonModule,
    PunchingFormatRoutingModule,
    SideBarModule,
    FormsModule

  ],
  exports: [
    PunchingFormatComponent
  ]
})
export class PunchingFormatModule { }
