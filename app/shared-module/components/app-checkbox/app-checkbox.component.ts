import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  template: `
    <label>
      <input type="checkbox" (change)="onChecked($event.target.checked)">
      <ng-content select="p"></ng-content>
    </label>
  `
})
export class AppCheckboxComponent {

  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  onChecked(value: boolean) {
    this.checked.emit(value);
  }

}