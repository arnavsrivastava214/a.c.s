import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromoteToHigherClassRoutingModule } from './promote-to-higher-class-routing.module';
import { PromoteToHigherClassComponent } from './promote-to-higher-class.component';
import { SideBarModule } from "../../sharedComp/side-bar/side-bar.module";


@NgModule({
  declarations: [PromoteToHigherClassComponent],
  imports: [
    CommonModule,
    PromoteToHigherClassRoutingModule,
    SideBarModule
],
  exports:[
    PromoteToHigherClassComponent
  ]
})
export class PromoteToHigherClassModule { }
