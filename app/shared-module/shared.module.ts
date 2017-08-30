import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// service
import { PassengerDashboardService } from './services/passenger-dashboard.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    PassengerDashboardService
  ]
})

export class SharedModule {}