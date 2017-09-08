import { Product } from './../../../shared-module/models/product.interface';
import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router';

//Libraries
import 'rxjs/add/operator/switchMap';

//Models
import { Guest } from '../../../shared-module/models/guest.interface';
import { Product } from '../../../shared-module/models/product.interface';

//resources
import { GuestDashboardResource } from '../../../shared-module/resources/guest-dashboard.resource';

//Routes
import { AppRoutesEnum } from '../../../app-routes-module/app-routes-enum';

@Component({
  selector: 'guest-form',
  templateUrl: 'guest-form.component.html'
})

export class GuestFormComponent implements OnInit {
  public guest: Guest;
  public guests: Guest[];
  public guestProducts: Product[];
  
  constructor(
    private guestDashboardResource: GuestDashboardResource,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit() {
    this.route.params
      .switchMap((data: Guest) => this.guestDashboardResource.getGuest(data.id))
      .subscribe((data: Guest) => {
        this.guest = data; 
        this.guestProducts = data.products;
      });

    this.guestDashboardResource
      .getGuests()
      .subscribe((data: Guest[]) => this.guests = data);
  }

  handleEdit(event: Guest) {
    this.guestDashboardResource
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
    this.guestDashboardResource
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