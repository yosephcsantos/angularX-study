import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// service
import { GuestDashboardService } from './services/guest-dashboard.service';

//resources
import { GuestDashboardResource } from './resources/guest-dashboard.resource';

// directives
import { CreditCardDirective } from './directives/credit-card.directive';
import { TooltipDirective } from './directives/tooltip.directive';
import { MyForDirective } from './directives/my-for.directive';

// components
import { PageDefaultComponent } from './components/page-default/page-default.component';
import { AppCheckboxComponent } from './components/app-checkbox/app-checkbox.component';
import { AppListComponent } from './components/app-list/app-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageDefaultComponent,
    AppCheckboxComponent,
    CreditCardDirective,
    TooltipDirective,
    MyForDirective,
    AppListComponent
  ],
  exports: [
    PageDefaultComponent,
    AppCheckboxComponent,
    CreditCardDirective,
    TooltipDirective,
    MyForDirective,
    AppListComponent
  ],
  providers: [
    GuestDashboardService,
    GuestDashboardResource
  ]
})

export class SharedModule {}