import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { QrCodeComponent } from './qr-code/qr-code.component';
import { StationComponent } from './station/station.component';
import { NumberComponent } from './number/number.component';
import { LoginComponent } from './login/login.component';
import { YourTurnComponent } from './your-turn/your-turn.component';
import { HomeComponent } from './home/home.component';

import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [QrCodeComponent, StationComponent, NumberComponent, LoginComponent, YourTurnComponent, HomeComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule ,
    NgbTooltipModule
  ]
})
export class PagesModule { }
