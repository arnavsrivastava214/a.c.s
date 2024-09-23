import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TuitionFeeComponent } from './tuition-fee.component';

const routes: Routes = [
  {
    path:'',
    component:TuitionFeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TuitionFeeRoutingModule { }
