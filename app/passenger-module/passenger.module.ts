import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

// containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerFormComponent } from './containers/passenger-form/passenger-form.component';

// components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerListComponent } from './components/passenger-list/passenger-list.component';

// service
import { PassengerDashboardService } from '../shared-module/services/passenger-dashboard.service';

// modules
import { SharedModule } from '../shared-module/shared.module';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerListComponent,
    PassengerFormComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    SharedModule
  ],
  exports: [
    PassengerDashboardComponent,
    PassengerFormComponent
  ]
})
export class PassengerModule {}