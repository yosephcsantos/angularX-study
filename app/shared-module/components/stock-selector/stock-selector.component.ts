import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

//models
import { Product } from './../../models/product.interface';

@Component({
    selector: 'stock-selector',
    styleUrls: ['stock-selector.component.css'],
    templateUrl: 'stock-selector.component.html'
})

export class StockSelectorComponent {
    @Input()
    parent: FormGroup;
    
    @Input()
    products: Product[];

    @Output()
    added = new EventEmitter();

    onAdd() {
        if(this.parent.get('selector').value.product_id)
            this.added.emit(this.parent.get('selector').value);
    }
}