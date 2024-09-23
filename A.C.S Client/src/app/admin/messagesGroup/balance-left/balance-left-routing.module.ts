import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceLeftComponent } from './balance-left.component';

const routes: Routes = [
  
    {
      path:'',
      component:BalanceLeftComponent
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalanceLeftRoutingModule { }
