import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TcIssueComponent } from './tc-issue.component';

const routes: Routes = [
  {
    path:'',
    component:TcIssueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TcIssueRoutingModule { }
