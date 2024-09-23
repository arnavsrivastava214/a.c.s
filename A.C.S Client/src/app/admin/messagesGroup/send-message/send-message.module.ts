import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendMessageRoutingModule } from './send-message-routing.module';
import { SendMessageComponent } from './send-message.component';
import { SideBarModule } from "../../../sharedComp/side-bar/side-bar.module";


@NgModule({
  declarations: [SendMessageComponent],
  imports: [
    CommonModule,
    SendMessageRoutingModule,
    SideBarModule
]
  ,
  exports:[
    SendMessageComponent
  ]
})
export class SendMessageModule { }
