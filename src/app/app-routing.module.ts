import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { QrCodeComponent } from './pages/qr-code/qr-code.component';
import { StationComponent } from './pages/station/station.component';
import { NumberComponent } from './pages/number/number.component';
import { YourTurnComponent } from './pages/your-turn/your-turn.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'show-code', component: QrCodeComponent },
  { path: 'station', component: StationComponent },
  { path: 'number', component: NumberComponent },
  { path: 'turno/:sec', component: YourTurnComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
