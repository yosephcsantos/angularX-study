import { Component } from '@angular/core';

@Component({
  selector: 'guest-message',
  template: `
    <div>
      The list show only guests with {{ messageFilter }} done!
    </div>
  `
})
export class GuestMessageComponent {
  public messageFilter: string = 'CheckIn';
}