import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicRecordsComponent } from '../../academic-records/academic-records.component';

const routes: Routes = [
  {
    path:'',
    component:AcademicRecordsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicReportRoutingModule { }
