import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompleteReportComponent } from './complete-report.component';

const routes: Routes = [
  {
    path:'',
    component:CompleteReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompleteReportRoutingModule { }
