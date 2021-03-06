import { Component, OnChanges, Input, Output, ChangeDetectorRef, Renderer,
  EventEmitter, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation } from '@angular/core';

// Models
import { Guest } from '../../../shared-module/models/guest.interface';

//Routes
import { AppRoutesEnum } from '../../../app-routes-module/app-routes-enum';

@Component({
  selector: 'guest-detail',
  //Native (Não tem participação nenhuma com os estilos do projeto, usa o shadowDom), 
  //None (Não encapsula nada)
  //Emulated escopo nativo de estilos e adiciona id no elemento para pré processar as próprias regras de estilo
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['guest-detail.component.css'],
  templateUrl: 'guest-detail.component.html' 
})
export class GuestDetailComponent implements OnChanges {
  public editing: boolean = false;
  
  @ViewChild('name') name: ElementRef;

  @Input()
  detail: Guest;

  @Output()
  edit: EventEmitter<Guest> = new EventEmitter<Guest>();

  @Output()
  remove: EventEmitter<Guest> = new EventEmitter<Guest>();
  
  constructor(
    private cd: ChangeDetectorRef,
    private renderer: Renderer
  ) {}

  configInputELement() {
    if(this.name) {
      // this.name.nativeElement.setAttribute('placeholder', 'Input guest name');
      // this.name.nativeElement.focus();
      this.renderer.setElementAttribute(this.name.nativeElement, 'placeholder', 'Input guest name');
      this.renderer.invokeElementMethod(this.name.nativeElement, 'focus');
    }
  }

  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }
  
  onNameChange(value: string) {
    this.detail.fullname = value;
  }

  onCreditCardChange(value: string) {
    this.detail.creditCard = value;
  }
  
  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    
    this.editing = !this.editing;

    this.cd.detectChanges();
    this.configInputELement();
  }
  
  onRemove() {
    this.remove.emit(this.detail);
  }
}