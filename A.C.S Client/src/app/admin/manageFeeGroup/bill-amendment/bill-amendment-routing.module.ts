import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillAmendmentComponent } from './bill-amendment.component';

const routes: Routes = [
  {
    path:'',
    component:BillAmendmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillAmendmentRoutingModule { }
