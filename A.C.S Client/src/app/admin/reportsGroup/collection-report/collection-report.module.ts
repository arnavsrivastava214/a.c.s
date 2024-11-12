import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionReportRoutingModule } from './collection-report-routing.module';
import { CollectionReportComponent } from './collection-report.component';
import { SideBarModule } from "../../../sharedComp/side-bar/side-bar.module";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CollectionReportComponent],
  imports: [
    CommonModule,
    CollectionReportRoutingModule,
    SideBarModule,
    FormsModule
],
  exports:[
    CollectionReportComponent
  ]
})
export class CollectionReportModule { }
