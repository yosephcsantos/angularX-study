import { Product } from './../../models/product.interface';
import { FormGroup, FormArray } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'stock-product',
    templateUrl: 'stock-product.component.html',
    styles: [`
        .stock-product__name {
            float:left;
            display: inline;
        }
        .stock-product__content {
            width:302px;
        }
        .stock-product__input {
            float:right;
            display: inline;
        }
        .stock-height {
            height:30px;
        }
        button {
            background: red;
        }
    `]
})

export class StockProductComponent {
    @Input()
    parent: FormGroup;
  
    @Output()
    removed = new EventEmitter<any>();

    @Input()
    map: Map<number, Product>;
  
    onRemove(group, index) {
      this.removed.emit({ group, index });
    }

    getProduct(id) {
        return this.map.get(id);
    }
  
    get stocks() {
        return (this.parent.get('stock') as FormArray).controls;
    }
  
}