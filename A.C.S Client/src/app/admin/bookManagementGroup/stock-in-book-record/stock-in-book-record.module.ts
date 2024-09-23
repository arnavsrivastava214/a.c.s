import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockInBookRecordRoutingModule } from './stock-in-book-record-routing.module';
import { StockInBookRecordComponent } from './stock-in-book-record.component';
import { SideBarModule } from "../../../sharedComp/side-bar/side-bar.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [StockInBookRecordComponent],
  imports: [
    CommonModule,
    StockInBookRecordRoutingModule,
    SideBarModule,
    ReactiveFormsModule,
    HttpClientModule,
FormsModule



  ],
  exports: [
    StockInBookRecordComponent
  ]
})
export class StockInBookRecordModule { }
