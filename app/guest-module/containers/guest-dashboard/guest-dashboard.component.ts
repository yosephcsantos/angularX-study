import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, AfterContentInit, ComponentRef, ComponentFactoryResolver } from '@angular/core'; 
import { Router } from '@angular/router';

//Models
import { Guest } from '../../../shared-module/models/guest.interface';

//resources
import { GuestDashboardResource } from '../../../shared-module/resources/guest-dashboard.resource';

//Routes
import { AppRoutesEnum } from '../../../app-routes-module/app-routes-enum';

//Service
import { GuestDashboardService } from './../../../shared-module/services/guest-dashboard.service';

//Components
import { GuestCountComponent } from './../../components/guest-count/guest-count.component';

@Component({
  selector: 'guest-dashboard',
  templateUrl: 'guest-dashboard.component.html'
})

export class GuestDashboardComponent implements OnInit, AfterContentInit {
  public guestsView: Guest[];
  public checkInOption: boolean;
  public checkOutOption: boolean;
  private allGuests: Guest[];
  private guestsCheckin: Guest[];
  private guestsCheckout: Guest[];

  private guestCountComponent: ComponentRef<GuestCountComponent>;

  @ViewChild('counter', {read: ViewContainerRef}) counter: ViewContainerRef;
  @ViewChild('counterType') counterType: TemplateRef<any>;
  
  constructor(
    private resolver: ComponentFactoryResolver,
    private guestDashboardResource: GuestDashboardResource,
    private guestDashboardService: GuestDashboardService,
    private router: Router
  ) {}

  ngAfterContentInit() {
    const guestCountFactory = this.resolver.resolveComponentFactory(GuestCountComponent);
    this.guestCountComponent = this.counter.createComponent(guestCountFactory);

    //inject <template> in HTMLs
    this.counter.createEmbeddedView(this.counterType, {
      //é para as variáveis que não tem nome, por exemplo, 
      //o let-name não tem value, somente o let-location="location"
      //o $implicit é para essas variáveis
      $implicit: 'Yoseph Santos', 
      location: 'Brazil, RJ'
    });
  }
  
  ngOnInit() {
     this.guestDashboardResource
      .getGuests()
      .subscribe((data: Guest[]) => {
        this.allGuests = data;
        this.guestsView = this.guestDashboardService.guestsFiltered(this.allGuests, this.checkInOption, this.checkOutOption);
        this.updateCounterGuestsWithCheckin();
      });
  }

  handlePassenger( guestId: number ) {
    this.destroyComponent();
    this.router.navigate([AppRoutesEnum.Guest, { id: guestId }]);
  }

  toggleCheckIn(isChecked: boolean) {
    this.checkInOption = isChecked; 
    this.guestsView = this.guestDashboardService.guestsFiltered(this.allGuests, this.checkInOption, this.checkOutOption);
    this.updateCounterGuestsWithCheckin();
  }

  toggleCheckOut(isChecked: boolean) {
    this.checkOutOption = isChecked; 
    this.guestsView = this.guestDashboardService.guestsFiltered(this.allGuests, this.checkInOption, this.checkOutOption);
    this.updateCounterGuestsWithCheckin();
  }

  updateCounterGuestsWithCheckin() {
    this.guestCountComponent.instance.items = this.guestsView;
  }
  
  destroyComponent() {
    this.guestCountComponent.destroy();
  }
}