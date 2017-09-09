import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

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
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';
import { StockProductComponent } from './components/stock-product/stock-product.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    PageDefaultComponent,
    AppCheckboxComponent,
    CreditCardDirective,
    TooltipDirective,
    MyForDirective,
    AppListComponent,
    StockSelectorComponent,
    StockProductComponent
  ],
  exports: [
    PageDefaultComponent,
    AppCheckboxComponent,
    CreditCardDirective,
    TooltipDirective,
    MyForDirective,
    AppListComponent,
    StockSelectorComponent,
    StockProductComponent
  ],
  providers: [
    GuestDashboardService,
    GuestDashboardResource
  ]
})

export class SharedModule {}