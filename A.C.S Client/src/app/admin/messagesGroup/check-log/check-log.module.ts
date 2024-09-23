import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckLogRoutingModule } from './check-log-routing.module';
import { CheckLogComponent } from './check-log.component';
import { SideBarModule } from "../../../sharedComp/side-bar/side-bar.module";


@NgModule({
  declarations: [CheckLogComponent],
  imports: [
    CommonModule,
    CheckLogRoutingModule,
    SideBarModule
]
  ,exports:[
    CheckLogComponent
  ]
})
export class CheckLogModule { }
