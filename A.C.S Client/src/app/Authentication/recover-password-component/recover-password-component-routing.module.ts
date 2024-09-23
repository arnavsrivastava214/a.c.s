import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecoverPasswordComponentComponent } from './recover-password-component.component';

const routes: Routes = [
  {
    path:"",
    component:RecoverPasswordComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecoverPasswordComponentRoutingModule { }
