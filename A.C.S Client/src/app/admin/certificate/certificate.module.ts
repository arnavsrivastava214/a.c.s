import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificateRoutingModule } from './certificate-routing.module';
import { CertificateComponent } from './certificate.component';
import { SideBarModule } from 'src/app/sharedComp/side-bar/side-bar.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CertificateComponent],
  imports: [
    CommonModule,
    CertificateRoutingModule,
    SideBarModule,
FormsModule


  ],
  exports: [CertificateComponent]
})
export class CertificateModule { }
