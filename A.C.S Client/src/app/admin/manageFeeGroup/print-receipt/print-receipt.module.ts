import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintReceiptRoutingModule } from './print-receipt-routing.module';
import { PrintReceiptComponent } from './print-receipt.component';
import { SideBarModule } from "../../../sharedComp/side-bar/side-bar.module";


@NgModule({
  declarations: [PrintReceiptComponent],
  imports: [
    CommonModule,
    PrintReceiptRoutingModule,
    SideBarModule
],
  exports:[
    PrintReceiptComponent

  ]
})
export class PrintReceiptModule { }
