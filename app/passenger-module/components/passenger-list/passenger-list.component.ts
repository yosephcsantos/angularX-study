import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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
          <tr class="u-cursor-pointer" *ngFor="let passenger of passengerList;" (click)="handlePassenger(passenger.id)">
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

    constructor(
      private route: Router
    ) {}

    handlePassenger( passengerId: number ) {
      this.route.navigate(['passenger/', {id: passengerId}])
    }
}