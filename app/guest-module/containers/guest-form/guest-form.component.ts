import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router';

//Libraries
import 'rxjs/add/operator/switchMap';

//Models
import { Guest } from '../../../shared-module/models/guest.interface';

//resources
import { GuestDashboardService } from '../../../shared-module/resources/guest-dashboard.resource';

//Routes
import { AppRoutesEnum } from '../../../app-routes-module/app-routes-enum';

@Component({
  selector: 'guest-form',
  templateUrl: 'guest-form.component.html'
})

export class GuestFormComponent implements OnInit {
  public guest: Guest;
  public guests: Guest[];
  
  constructor(
    private guestService: GuestDashboardService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit() {
    this.route.params
      .switchMap((data: Guest) => this.guestService.getGuest(data.id))
      .subscribe((data: Guest) => this.guest = data);

    this.guestService
      .getGuests()
      .subscribe((data: Guest[]) => this.guests = data);
  }

  handleEdit(event: Guest) {
    this.guestService
      .updateGuest(event)
      .subscribe((data: Guest) => {
        this.guests = this.guests.map((guest: Guest) => {
          if (guest.id === event.id) {
            guest = Object.assign({}, guest, event);
          }
          return guest;
        });
      });

    this.goToPassengersPage();
  }

  handleRemove(event: Guest) {
    this.guestService
      .removeGuest(event)
      .subscribe((data: Guest) => {
        this.guests = this.guests.filter((guest: Guest) => {
          return guest.id !== event.id;
        });
      });
    
    this.goToPassengersPage();
  }

  goToPassengersPage() {
    this.router.navigate([AppRoutesEnum.Guests]);
  }
}