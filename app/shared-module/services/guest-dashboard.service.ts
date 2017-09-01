import { Injectable } from '@angular/core';

import { Guest } from '../models/guest.interface';

@Injectable()
export class GuestDashboardService {
    guestsFiltered(allGuests, checkInOption, checkOutOption): Guest[] {
        if(checkInOption && !checkOutOption)
            return this.getGuestsWithCheckinDone(allGuests);

        if(!checkInOption && checkOutOption)
            return this.getGuestsWithCheckoutDone(allGuests);
        
        return this.getAllGuests(allGuests);
    }

    getGuestsWithCheckoutDone(allGuests: Guest[]) {
        return allGuests.filter(guest => guest.checkedOut);
    }

    getGuestsWithCheckinDone(allGuests: Guest[]) {
        return allGuests.filter(guest => guest.checkedIn);
    }

    getAllGuests(allGuests: Guest[]) {
        return allGuests;
    }
}