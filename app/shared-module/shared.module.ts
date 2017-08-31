import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// service
import { GuestDashboardService } from './services/guest-dashboard.service';

// components
import { PageDefaultComponent } from './components/page-default/page-default.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageDefaultComponent
  ],
  exports: [
    PageDefaultComponent
  ],
  providers: [
    GuestDashboardService
  ]
})

export class SharedModule {}