import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

// containers
import { GuestDashboardComponent } from './containers/guest-dashboard/guest-dashboard.component';
import { GuestFormComponent } from './containers/guest-form/guest-form.component';
import { GuestFilterComponent } from './containers/guest-filter/guest-filter.component';

// components
import { GuestCountComponent } from './components/guest-count/guest-count.component';
import { GuestDetailComponent } from './components/guest-detail/guest-detail.component';
import { GuestListComponent } from './components/guest-list/guest-list.component';
import { GuestMessageComponent } from './components/guest-message/guest-message.component';
import { AppCheckboxComponent } from './../shared-module/components/app-checkbox/app-checkbox.component';

// modules
import { SharedModule } from '../shared-module/shared.module';

@NgModule({
  declarations: [
    GuestDashboardComponent,
    GuestCountComponent,
    GuestDetailComponent,
    GuestListComponent,
    GuestFormComponent,
    GuestFilterComponent,
    GuestMessageComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    SharedModule
  ],
  exports: [
    GuestDashboardComponent,
    GuestFormComponent,
    GuestFilterComponent
  ],
  entryComponents: [
    GuestCountComponent,
    AppCheckboxComponent
  ]
})
export class GuestModule {}