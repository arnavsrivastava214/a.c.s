import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMessageRoutingModule } from './add-message-routing.module';
import { AddMessageComponent } from './add-message.component';
import { SideBarModule } from "../../../sharedComp/side-bar/side-bar.module";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddMessageComponent],
  imports: [
    CommonModule,
    AddMessageRoutingModule,
    SideBarModule,
    FormsModule
],
  exports:[
    AddMessageComponent
  ]
})
export class AddMessageModule { }
