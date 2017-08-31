import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// service
import { GuestDashboardService } from './services/guest-dashboard.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    GuestDashboardService
  ]
})

export class SharedModule {}