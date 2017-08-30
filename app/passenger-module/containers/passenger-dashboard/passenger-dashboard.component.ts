import { Component, OnInit } from '@angular/core'; 

//Models
import { Passenger } from '../../../shared-module/models/passenger.interface';

//services
import { PassengerDashboardService } from '../../../shared-module/services/passenger-dashboard.service';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.css'],
  template: `
    <div>
      <passenger-count
        [items]="passengers">
      </passenger-count>
      
      <passenger-list
        [passengerList]="passengers">
      </passenger-list>

      <passenger-detail
        *ngFor="let passenger of passengers;"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)">
      </passenger-detail>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  constructor(private passengerService: PassengerDashboardService) {}
  ngOnInit() {
     this.passengerService
      .getPassengers()
      .subscribe((data: Passenger[]) => this.passengers = data);
  }
  handleEdit(event: Passenger) {
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if (passenger.id === event.id) {
            passenger = Object.assign({}, passenger, event);
          }
          return passenger;
        });
      });
  }
  handleRemove(event: Passenger) {
    this.passengerService
      .removePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.filter((passenger: Passenger) => {
          return passenger.id !== event.id;
        });
      });
  }
}