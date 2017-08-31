import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

// containers
import { GuestDashboardComponent } from './containers/guest-dashboard/guest-dashboard.component';
import { GuestFormComponent } from './containers/guest-form/guest-form.component';

// components
import { PassengerCountComponent } from './components/guest-count/guest-count.component';
import { PassengerDetailComponent } from './components/guest-detail/guest-detail.component';
import { PassengerListComponent } from './components/guest-list/guest-list.component';

// service
import { GuestDashboardService } from '../shared-module/services/guest-dashboard.service';

// modules
import { SharedModule } from '../shared-module/shared.module';

@NgModule({
  declarations: [
    GuestDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerListComponent,
    GuestFormComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    SharedModule
  ],
  exports: [
    GuestDashboardComponent,
    GuestFormComponent
  ]
})
export class PassengerModule {}