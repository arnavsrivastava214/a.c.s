import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoverPasswordComponentRoutingModule } from './recover-password-component-routing.module';
import { FormsModule } from '@angular/forms';
import { RecoverPasswordComponentComponent } from './recover-password-component.component';



@NgModule({
  declarations: [RecoverPasswordComponentComponent],
  imports: [
    CommonModule,
    RecoverPasswordComponentRoutingModule,
    FormsModule
  ],
  exports:[
    RecoverPasswordComponentComponent
  ]
})

export class RecoverPasswordComponentModule { }
