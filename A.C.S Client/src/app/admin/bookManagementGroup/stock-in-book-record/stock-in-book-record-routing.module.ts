import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockInBookRecordComponent } from './stock-in-book-record.component';

const routes: Routes = [
  
    {
      path:'',
      component:StockInBookRecordComponent
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockInBookRecordRoutingModule { }
