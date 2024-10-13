import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TcIssueRoutingModule } from './tc-issue-routing.module';
import { TcIssueComponent } from './tc-issue.component';
import { SideBarModule } from "../../sharedComp/side-bar/side-bar.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TcIssueComponent],
  imports: [
    CommonModule,
    TcIssueRoutingModule,
    SideBarModule,
FormsModule,
ReactiveFormsModule


],
  exports:[
    TcIssueComponent
  ]
})
export class TcIssueModule { }
