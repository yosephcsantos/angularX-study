import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

// Models
import { Guest } from '../../../shared-module/models/guest.interface';

//Routes
import { AppRoutesEnum } from '../../../app-routes-module/app-routes-enum';

@Component({
  selector: 'guest-detail',
  styleUrls: ['guest-detail.component.css'],
  templateUrl: 'guest-detail.component.html' 
})
export class GuestDetailComponent implements OnChanges {
  public editing: boolean = false;
  
  @Input()
  detail: Guest;

  @Output()
  edit: EventEmitter<Guest> = new EventEmitter<Guest>();

  @Output()
  remove: EventEmitter<Guest> = new EventEmitter<Guest>();
  
  constructor() {}

  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }
  
  onNameChange(value: string) {
    this.detail.fullname = value;
  }
  
  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }
  
  onRemove() {
    this.remove.emit(this.detail);
  }
}