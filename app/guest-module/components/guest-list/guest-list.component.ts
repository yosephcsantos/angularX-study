import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { Guest } from '../../../shared-module/models/guest.interface';

//Routes
import { AppRoutesEnum } from '../../../app-routes-module/app-routes-enum';

@Component({
    selector: 'guest-list',
    templateUrl: 'guest-list.component.html' 
})

export class PassengerListComponent {
    @Input() guestList: Guest[];

    constructor(
      private router: Router
    ) {}

    handlePassenger( guestId: number ) {
      this.router.navigate([AppRoutesEnum.Guest, { id: guestId }]);
    }
}