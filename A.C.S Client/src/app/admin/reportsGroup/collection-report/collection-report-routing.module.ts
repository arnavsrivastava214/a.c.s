import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionBetweenTwoDatesComponent } from '../../bookManagementGroup/collection-between-two-dates/collection-between-two-dates.component';
import { CollectionReportComponent } from './collection-report.component';

const routes: Routes = [
  {
    path:'',
    component:CollectionReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionReportRoutingModule { }
