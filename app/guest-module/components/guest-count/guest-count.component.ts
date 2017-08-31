import { Component, Input } from '@angular/core';

// Models
import { Guest } from '../../../shared-module/models/guest.interface';

@Component({
  selector: 'guest-count',
  templateUrl: 'guest-count.component.html' 
})

export class PassengerCountComponent {
  @Input() items: Guest[];

  checkedInCount(): number {
    if (!this.items) return;
    return this.items.filter((guest: Guest) => guest.checkedIn).length;
  }
}