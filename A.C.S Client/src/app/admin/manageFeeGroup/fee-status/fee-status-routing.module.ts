import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeeStatusComponent } from './fee-status.component';

const routes: Routes = [
  {
    path:'',
    component:FeeStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeeStatusRoutingModule { }
