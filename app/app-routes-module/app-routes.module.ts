import { AppComponent } from './../app.component';
import { PassengerDashboardComponent } from './../passenger-module/containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerFormComponent } from './../passenger-module/containers/passenger-form/passenger-form.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', component: PassengerDashboardComponent, pathMatch: 'full' },
  { path: 'passenger', component: PassengerFormComponent, pathMatch: 'full'},
  { path: '**', component: PassengerDashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutesModule { }
