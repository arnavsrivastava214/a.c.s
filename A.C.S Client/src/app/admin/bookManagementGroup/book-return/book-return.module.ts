import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookReturnRoutingModule } from './book-return-routing.module';
import { BookReturnComponent } from './book-return.component';
import { SideBarModule } from "../../../sharedComp/side-bar/side-bar.module";


@NgModule({
  declarations: [BookReturnComponent],
  imports: [
    CommonModule,
    BookReturnRoutingModule,
    SideBarModule
],
  exports:[
    BookReturnComponent

  ]
})
export class BookReturnModule { }
