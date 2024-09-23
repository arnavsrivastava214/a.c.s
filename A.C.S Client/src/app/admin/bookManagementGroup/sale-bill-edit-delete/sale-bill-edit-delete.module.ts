import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleBillEditDeleteRoutingModule } from './sale-bill-edit-delete-routing.module';
import { SaleBillEditDeleteComponent } from './sale-bill-edit-delete.component';
import { SideBarModule } from "../../../sharedComp/side-bar/side-bar.module";


@NgModule({
  declarations: [SaleBillEditDeleteComponent],
  imports: [
    CommonModule,
    SaleBillEditDeleteRoutingModule,
    SideBarModule
],
  exports:[
    SaleBillEditDeleteComponent
  ]
})
export class SaleBillEditDeleteModule { }
