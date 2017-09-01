import { Component, AfterContentInit, AfterViewInit, ContentChildren, ViewChild, QueryList, ViewChildren } from '@angular/core';

// components
import { AppCheckboxComponent } from './../../../shared-module/components/app-checkbox/app-checkbox.component';
import { GuestMessageComponent } from './../../../guest-module/components/guest-message/guest-message.component';

// models
import { FilterType } from './../../../shared-module/models/guest.interface';

@Component({
  selector: 'guest-filter',
  template: `
    <div>
        <ng-content select="app-checkbox"></ng-content>
        <guest-message
            [style.display]="(isFilteringCheckin && !isFilteringCheckout ? 'inherit' : 'none')">
        </guest-message>
        
        <guest-message
            [style.display]="(!isFilteringCheckin && isFilteringCheckout ? 'inherit' : 'none')">
        </guest-message>
    </div>
  `
})

export class GuestFilterComponent implements AfterContentInit, AfterViewInit {
    public isFilteringCheckin: boolean;
    public isFilteringCheckout: boolean;

    @ViewChildren(GuestMessageComponent) message: QueryList<GuestMessageComponent>;

    @ContentChildren(AppCheckboxComponent) isCheckIn: QueryList<AppCheckboxComponent>;

    ngAfterViewInit() {
        this.message.forEach((message, index)=>{
            if(index === FilterType.checkedIn)
                message.messageFilter = 'CheckIn';
            if(index === FilterType.checkedOut)
                message.messageFilter = 'CheckOut';
        });
    }

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