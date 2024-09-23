import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PunchingFormatComponent } from './punching-format.component';

const routes: Routes = [
  {
    path:'',
    component:PunchingFormatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PunchingFormatRoutingModule { }
