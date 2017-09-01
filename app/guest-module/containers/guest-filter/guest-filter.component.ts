import { Component, ContentChild, AfterContentInit, ContentChildren, QueryList } from '@angular/core';

// components
import { AppCheckboxComponent } from './../../../shared-module/components/app-checkbox/app-checkbox.component';

// models
import { FilterType } from './../../../shared-module/models/guest.interface';

@Component({
  selector: 'guest-filter',
  template: `
    <div>
        <ng-content select="app-checkbox"></ng-content>
        <div *ngIf="isFilteringCheckin && !isFilteringCheckout">
            The list show only guests with Checkin Done!
        </div>
        <div *ngIf="isFilteringCheckout && !isFilteringCheckin">
            The list show only guests with Checkout Done!
        </div>
    </div>
  `
})

export class GuestFilterComponent implements AfterContentInit {
    public isFilteringCheckin: boolean;
    public isFilteringCheckout: boolean;
    
    @ContentChildren(AppCheckboxComponent) isCheckIn: QueryList<AppCheckboxComponent>;

    ngAfterContentInit() {
        this.isCheckIn.forEach((item, index) => {
            item.checked.subscribe((checked: boolean) => {
                if(index === FilterType.checkedIn)
                    this.isFilteringCheckin = checked;
                if(index === FilterType.checkedOut)
                    this.isFilteringCheckout = checked;
            });
        });
    }
}