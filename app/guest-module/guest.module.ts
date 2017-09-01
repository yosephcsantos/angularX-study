import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

// containers
import { GuestDashboardComponent } from './containers/guest-dashboard/guest-dashboard.component';
import { GuestFormComponent } from './containers/guest-form/guest-form.component';

// components
import { GuestCountComponent } from './components/guest-count/guest-count.component';
import { GuestDetailComponent } from './components/guest-detail/guest-detail.component';
import { GuestListComponent } from './components/guest-list/guest-list.component';

// service
import { GuestDashboardService } from '../shared-module/services/guest-dashboard.service';

// modules
import { SharedModule } from '../shared-module/shared.module';

@NgModule({
  declarations: [
    GuestDashboardComponent,
    GuestCountComponent,
    GuestDetailComponent,
    GuestListComponent,
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
export class GuestModule {}