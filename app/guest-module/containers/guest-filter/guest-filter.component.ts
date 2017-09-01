import { AppCheckboxComponent } from './../../../shared-module/components/app-checkbox/app-checkbox.component';
import { Component, ContentChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'guest-filter',
  template: `
    <div>
        <ng-content select="app-checkbox"></ng-content>
        <div *ngIf="isFiltering">
            The checkIn filter was checked!
        </div>
    </div>
  `
})

export class GuestFilterComponent implements AfterContentInit {
    public isFiltering: boolean;
  
    @ContentChild(AppCheckboxComponent) isCheckIn: AppCheckboxComponent;

    ngAfterContentInit() {
        if (this.isCheckIn) {
            this.isCheckIn.checked.subscribe((checked: boolean) => this.isFiltering = checked);
        }
    }
}