import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleBillEditDeleteComponent } from './sale-bill-edit-delete.component';

const routes: Routes = [
  {
    path:'',
    component:SaleBillEditDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleBillEditDeleteRoutingModule { }
