import { AppComponent } from './../app.component';
import { GuestDashboardComponent } from './../guest-module/containers/guest-dashboard/guest-dashboard.component';
import { GuestFormComponent } from './../guest-module/containers/guest-form/guest-form.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', component: GuestDashboardComponent, pathMatch: 'full' },
  { path: 'guest', component: GuestFormComponent, pathMatch: 'full'},
  { path: '**', component: GuestDashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutesModule { }
