import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StalkOutBookSaleRoutingModule } from './stalk-out-book-sale-routing.module';
import { StalkOutBookSaleComponent } from './stalk-out-book-sale.component';
import { SideBarModule } from "../../../sharedComp/side-bar/side-bar.module";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [StalkOutBookSaleComponent],
  imports: [
    CommonModule,
    StalkOutBookSaleRoutingModule,
    SideBarModule,
FormsModule

],
  exports:[
    StalkOutBookSaleComponent
  ]
})
export class StalkOutBookSaleModule { }
