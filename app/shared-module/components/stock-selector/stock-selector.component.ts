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
        this.parent.get('selector').value.name = this.getProductName(this.parent.get('selector').value.product_id);
     
        if(this.parent.get('selector').value.name)
            this.added.emit(this.parent.get('selector').value);
    }

    getProductName(product_id: number) {
        let productSelected;
        
        this.products.forEach((product)=> {
            if(product.product_id == product_id) {
                productSelected = product;
            }
        })

        if(productSelected)
            return productSelected.name;
    }
}