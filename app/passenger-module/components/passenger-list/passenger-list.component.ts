import { Component, Input } from '@angular/core';

// Models
import { Passenger } from '../../../shared-module/models/passenger.interface';

@Component({
    selector: 'passenger-list',
    template: `
        <table class="table table-striped">
        <thead>
          <tr>
            <th>Passenger name</th>
            <th>Checkin date</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let passenger of passengerList;">
            <td>{{ passenger.fullname }}</td>
            <td>
              {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
            </td>
          </tr>
        </tbody>
      </table>
    `
})

export class PassengerListComponent {
    @Input() passengerList: Passenger[];
}