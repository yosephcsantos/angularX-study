import { AppCheckboxComponent } from './../../../shared-module/components/app-checkbox/app-checkbox.component';
import { Component, ContentChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'guest-filter',
  template: `
    <div>
        <ng-content select="app-checkbox"></ng-content>
        <div *ngIf="isFiltering">
            The list has only Guests with checkIn done!
        </div>
    </div>
  `
})

export class GuestFilterComponent implements AfterContentInit {
    public isFiltering: boolean;
  
    @ContentChild(AppCheckboxComponent) isCheckIn: AppCheckboxComponent;
    @ContentChild(AppCheckboxComponent) isCheckOut: AppCheckboxComponent;

    ngAfterContentInit() {
        console.log("guest-filter ", this.isCheckIn)
        if (this.isCheckIn) {
            this.isCheckIn.checked.subscribe((checked: boolean) => this.isFiltering = checked);
        }

        if (this.isCheckOut) {
            this.isCheckOut.checked.subscribe((checked: boolean) => this.isFiltering = checked);
        }
    }
}