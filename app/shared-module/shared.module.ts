import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// service
import { GuestDashboardService } from './services/guest-dashboard.service';

//resources
import { GuestDashboardResource } from './resources/guest-dashboard.resource';

// directives
import { CreditCardDirective } from './directives/credit-card.directive';

// components
import { PageDefaultComponent } from './components/page-default/page-default.component';
import { AppCheckboxComponent } from './components/app-checkbox/app-checkbox.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageDefaultComponent,
    AppCheckboxComponent,
    CreditCardDirective
  ],
  exports: [
    PageDefaultComponent,
    AppCheckboxComponent,
    CreditCardDirective
  ],
  providers: [
    GuestDashboardService,
    GuestDashboardResource
  ]
})

export class SharedModule {}