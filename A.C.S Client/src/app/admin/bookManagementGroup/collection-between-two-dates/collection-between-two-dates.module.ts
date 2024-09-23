import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionBetweenTwoDatesRoutingModule } from './collection-between-two-dates-routing.module';
import { CollectionBetweenTwoDatesComponent } from './collection-between-two-dates.component';
import { SideBarModule } from "../../../sharedComp/side-bar/side-bar.module";


@NgModule({
  declarations: [CollectionBetweenTwoDatesComponent],
  imports: [
    CommonModule,
    CollectionBetweenTwoDatesRoutingModule,
    SideBarModule
],
  exports:[
    CollectionBetweenTwoDatesComponent
  ]
})
export class CollectionBetweenTwoDatesModule { }
