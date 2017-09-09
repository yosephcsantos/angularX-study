import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

// containers
import { GuestDashboardComponent } from './containers/guest-dashboard/guest-dashboard.component';
import { GuestFormComponent } from './containers/guest-form/guest-form.component';
import { GuestFilterComponent } from './containers/guest-filter/guest-filter.component';
import { GuestCostComponent } from './containers/guest-cost/guest-cost.component';

// components
import { GuestCountComponent } from './components/guest-count/guest-count.component';
import { GuestDetailComponent } from './components/guest-detail/guest-detail.component';
import { GuestMessageComponent } from './components/guest-message/guest-message.component';
import { AppCheckboxComponent } from './../shared-module/components/app-checkbox/app-checkbox.component';

// modules
import { SharedModule } from '../shared-module/shared.module';

@NgModule({
  declarations: [
    GuestDashboardComponent,
    GuestCountComponent,
    GuestDetailComponent,
    GuestFormComponent,
    GuestFilterComponent,
    GuestMessageComponent,
    GuestCostComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    SharedModule,
    ReactiveFormsModule
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