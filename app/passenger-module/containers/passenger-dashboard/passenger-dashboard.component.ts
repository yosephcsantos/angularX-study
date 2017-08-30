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
      
      <br>

      <passenger-list
        [passengerList]="passengers">
      </passenger-list>
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
}