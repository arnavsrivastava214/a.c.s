import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMessageComponent } from './add-message.component';

const routes: Routes = [
  {
    path:'',
    component:AddMessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddMessageRoutingModule { }
