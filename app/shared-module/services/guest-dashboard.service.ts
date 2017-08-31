import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Guest } from '../models/guest.interface';

const GUEST_API: string = '/api/guests';

@Injectable()
export class GuestDashboardService {
  constructor(private http: Http) {}

  getGuests(): Observable<Guest[]> {
    return this.http
      .get(GUEST_API)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  getGuest( id: number ): Observable<Guest> {
    return this.http
      .get(`${GUEST_API}/${id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  updateGuest(guest: Guest): Observable<Guest> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http
      .put(`${GUEST_API}/${guest.id}`, guest, options)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  removeGuest(guest: Guest): Observable<Guest> {
    return this.http
      .delete(`${GUEST_API}/${guest.id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

}