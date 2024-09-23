import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckLogComponent } from './check-log.component';

const routes: Routes = [
  
    {
      path:'',
      component:CheckLogComponent
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckLogRoutingModule { }
