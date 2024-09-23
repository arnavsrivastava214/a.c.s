import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionBetweenTwoDatesComponent } from './collection-between-two-dates.component';

const routes: Routes = [
  
    {
      path:'',
      component:CollectionBetweenTwoDatesComponent
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionBetweenTwoDatesRoutingModule { }
