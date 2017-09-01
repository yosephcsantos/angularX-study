import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';

//Models
import { Guest } from '../../../shared-module/models/guest.interface';

//resources
import { GuestDashboardResource } from '../../../shared-module/resources/guest-dashboard.resource';

//Routes
import { AppRoutesEnum } from '../../../app-routes-module/app-routes-enum';

//Service
import { GuestDashboardService } from './../../../shared-module/services/guest-dashboard.service';

@Component({
  selector: 'guest-dashboard',
  styleUrls: ['guest-dashboard.component.css'],
  templateUrl: 'guest-dashboard.component.html'
})

export class GuestDashboardComponent implements OnInit {
  public guestsView: Guest[];
  public checkInOption: boolean;
  public checkOutOption: boolean;
  private allGuests: Guest[];
  private guestsCheckin: Guest[];
  private guestsCheckout: Guest[];
  
  constructor(
    private guestDashboardResource: GuestDashboardResource,
    private guestDashboardService: GuestDashboardService,
    private router: Router
  ) {}
  
  ngOnInit() {
     this.guestDashboardResource
      .getGuests()
      .subscribe((data: Guest[]) => {
        this.allGuests = data
        this.guestsView = this.guestDashboardService.guestsFiltered(this.allGuests, this.checkInOption, this.checkOutOption);
      });
  }

  handlePassenger( guestId: number ) {
    this.router.navigate([AppRoutesEnum.Guest, { id: guestId }]);
  }

  toggleCheckIn(isChecked: boolean) {
    this.checkInOption = isChecked; 
    this.guestsView = this.guestDashboardService.guestsFiltered(this.allGuests, this.checkInOption, this.checkOutOption);
  }

  toggleCheckOut(isChecked: boolean) {
    this.checkOutOption = isChecked; 
    this.guestsView = this.guestDashboardService.guestsFiltered(this.allGuests, this.checkInOption, this.checkOutOption);
  }
}