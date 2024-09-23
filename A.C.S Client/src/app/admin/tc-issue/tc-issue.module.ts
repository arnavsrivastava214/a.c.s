import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TcIssueRoutingModule } from './tc-issue-routing.module';
import { TcIssueComponent } from './tc-issue.component';
import { SideBarModule } from "../../sharedComp/side-bar/side-bar.module";


@NgModule({
  declarations: [TcIssueComponent],
  imports: [
    CommonModule,
    TcIssueRoutingModule,
    SideBarModule
],
  exports:[
    TcIssueComponent
  ]
})
export class TcIssueModule { }
