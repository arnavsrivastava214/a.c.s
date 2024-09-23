import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromoteToHigherClassComponent } from './promote-to-higher-class.component';

const routes: Routes = [
  {
    path:'',
    component:PromoteToHigherClassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromoteToHigherClassRoutingModule { }
