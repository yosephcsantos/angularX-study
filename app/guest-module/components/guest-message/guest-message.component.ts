import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'guest-message',
  template: `
    <div>
      The list show only guests with {{ messageFilter }} done!
    </div>
  `,
  //ChangeDetectionStrategy.OnPush torna os dados imutáveis.
  changeDetection: ChangeDetectionStrategy.Default
})
export class GuestMessageComponent {
  public messageFilter: string = 'CheckIn';
}