import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';

//Models
import { Guest } from '../../../shared-module/models/guest.interface';

//resources
import { GuestDashboardService } from '../../../shared-module/resources/guest-dashboard.resource';

//Routes
import { AppRoutesEnum } from '../../../app-routes-module/app-routes-enum';

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
    private guestService: GuestDashboardService,
    private router: Router
  ) {}
  
  ngOnInit() {
     this.guestService
      .getGuests()
      .subscribe((data: Guest[]) => {
        this.allGuests = data
        this.guestsView = this.getAllGuests();
      });
  }

  handlePassenger( guestId: number ) {
    this.router.navigate([AppRoutesEnum.Guest, { id: guestId }]);
  }

  toggleCheckIn(isChecked: boolean) {
    this.checkInOption = isChecked; 
    
    if(this.checkInOption && !this.checkOutOption)
      this.guestsView = this.getGuestsWithCheckinDone();
    else
      this.guestsView = this.getAllGuests();
  }

  toggleCheckOut(isChecked: boolean) {
    this.checkOutOption = isChecked; 
    
    if(this.checkOutOption && !this.checkInOption)
      this.guestsView = this.getGuestsWithCheckoutDone();
    else
      this.guestsView = this.getAllGuests();
  }

  getGuestsWithCheckoutDone() {
    return this.allGuests.filter(guest => guest.checkedOut);
  }

  getGuestsWithCheckinDone() {
    return this.allGuests.filter(guest => guest.checkedIn);
  }

  getAllGuests() {
    return this.allGuests;
  }
}