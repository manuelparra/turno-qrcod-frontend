import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { YourturnComponent } from './yourturn/yourturn.component';
import { SecuenceComponent } from './secuence/secuence.component';
import { NextComponent } from './next/next.component';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, QrcodeComponent, YourturnComponent, SecuenceComponent, NextComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbTooltipModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    QrcodeComponent,
    YourturnComponent,
    SecuenceComponent,
    NextComponent
  ]
})
export class ComponentsModule { }
