import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// service
import { GuestDashboardService } from './services/guest-dashboard.service';

// components
import { PageDefaultComponent } from './components/page-default/page-default.component';
import { AppCheckboxComponent } from './components/app-checkbox/app-checkbox.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageDefaultComponent,
    AppCheckboxComponent
  ],
  exports: [
    PageDefaultComponent,
    AppCheckboxComponent
  ],
  providers: [
    GuestDashboardService
  ]
})

export class SharedModule {}