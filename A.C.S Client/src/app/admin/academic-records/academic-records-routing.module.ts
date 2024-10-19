import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicReportComponent } from '../reportsGroup/academic-report/academic-report.component';

const routes: Routes = [
  {
    path:'',
    component:AcademicReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicRecordsRoutingModule { }
