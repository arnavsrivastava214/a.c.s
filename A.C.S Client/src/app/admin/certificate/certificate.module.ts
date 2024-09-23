import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificateRoutingModule } from './certificate-routing.module';
import { CertificateComponent } from './certificate.component';
import { SideBarModule } from 'src/app/sharedComp/side-bar/side-bar.module';


@NgModule({
  declarations: [CertificateComponent],
  imports: [
    CommonModule,
    CertificateRoutingModule,
    SideBarModule

  ],
  exports: [CertificateComponent]
})
export class CertificateModule { }
