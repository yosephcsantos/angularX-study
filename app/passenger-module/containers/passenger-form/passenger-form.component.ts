import { Passenger } from './../../../passenger-dashboard/models/passenger.interface';
import { appRoutes } from './../../../app-routes-module/app-routes.module';
import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router';

//Routes
import { appRoutes as AppRoutes } from '../../../app-routes-module/app-routes.module';
import { AppRoutesEnum } from '../../../app-routes-module/app-routes-enum';

//Libraries
import 'rxjs/add/operator/switchMap';

//Models
import { Passenger } from '../../../shared-module/models/passenger.interface';

//services
import { PassengerDashboardService } from '../../../shared-module/services/passenger-dashboard.service';

@Component({
  selector: 'passenger-form',
  template: `
    <div>
      {{ passengers | json }}
      <passenger-detail
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)">
      </passenger-detail>
    </div>
  `
})
export class PassengerFormComponent implements OnInit {
  public passenger: Passenger;
  public passengers: Passenger[];
  
  constructor(
    private passengerService: PassengerDashboardService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit() {
    this.route.params
      .switchMap((data: Passenger) => this.passengerService.getPassenger(data.id))
      .subscribe((data: Passenger) => this.passenger = data);

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

    this.goToPassengersPage();
  }

  handleRemove(event: Passenger) {
    this.passengerService
      .removePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.filter((passenger: Passenger) => {
          return passenger.id !== event.id;
        });
      });
    
    this.goToPassengersPage();
  }

  goToPassengersPage() {
    this.router.navigate([AppRoutesEnum.Passengers]);
  }
}