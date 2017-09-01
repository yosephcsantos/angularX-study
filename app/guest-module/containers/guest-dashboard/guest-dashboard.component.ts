import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';

//Models
import { Guest } from '../../../shared-module/models/guest.interface';

//services
import { GuestDashboardService } from '../../../shared-module/services/guest-dashboard.service';

//Routes
import { AppRoutesEnum } from '../../../app-routes-module/app-routes-enum';

@Component({
  selector: 'guest-dashboard',
  styleUrls: ['guest-dashboard.component.css'],
  templateUrl: 'guest-dashboard.component.html'
})

export class GuestDashboardComponent implements OnInit {
  public guests: Guest[];
  public checkedOption: boolean;
  
  constructor(
    private guestService: GuestDashboardService,
    private router: Router
  ) {}
  
  ngOnInit() {
     this.guestService
      .getGuests()
      .subscribe((data: Guest[]) => this.guests = data);
  }

  handlePassenger( guestId: number ) {
    this.router.navigate([AppRoutesEnum.Guest, { id: guestId }]);
  }

  toggleCheckbox(isChecked: boolean) {
    this.checkedOption = isChecked; 
  }
}