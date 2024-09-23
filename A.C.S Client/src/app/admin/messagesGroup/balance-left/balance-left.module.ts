import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalanceLeftRoutingModule } from './balance-left-routing.module';
import { BalanceLeftComponent } from './balance-left.component';
import { SideBarModule } from "../../../sharedComp/side-bar/side-bar.module";


@NgModule({
  declarations: [BalanceLeftComponent],
  imports: [
    CommonModule,
    BalanceLeftRoutingModule,
    SideBarModule
],
  exports:[
    BalanceLeftComponent
  ]
})
export class BalanceLeftModule { }
