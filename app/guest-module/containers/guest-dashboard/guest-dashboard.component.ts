import { Component, OnInit } from '@angular/core'; 

//Models
import { Guest } from '../../../shared-module/models/guest.interface';

//services
import { GuestDashboardService } from '../../../shared-module/services/guest-dashboard.service';

@Component({
  selector: 'guest-dashboard',
  styleUrls: ['guest-dashboard.component.css'],
  templateUrl: 'guest-dashboard.component.html'
})

export class GuestDashboardComponent implements OnInit {
  guests: Guest[];
  constructor(private guestService: GuestDashboardService) {}
  ngOnInit() {
     this.guestService
      .getGuests()
      .subscribe((data: Guest[]) => this.guests = data);
  }
}