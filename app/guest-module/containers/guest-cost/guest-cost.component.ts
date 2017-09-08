import { Component, Input, OnInit } from '@angular/core';

// models
import { Guest } from './../../../shared-module/models/guest.interface';
import { Product } from './../../../shared-module/models/product.interface';

@Component({
    selector: 'guest-cost',
    templateUrl: 'guest-cost.component.html'
})

export class GuestCostComponent implements OnInit {

    @Input()
    products: Product[];

    ngOnInit() {
        console.log(this.products)
        //this.guestProducts = this.detail.products;
    }
}