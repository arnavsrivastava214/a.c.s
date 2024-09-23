import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StalkOutBookSaleComponent } from './stalk-out-book-sale.component';

const routes: Routes = [
  {
    path:'',
    component:StalkOutBookSaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StalkOutBookSaleRoutingModule { }
