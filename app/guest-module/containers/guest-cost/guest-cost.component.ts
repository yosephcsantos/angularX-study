import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

// models
import { Guest } from './../../../shared-module/models/guest.interface';
import { Product } from './../../../shared-module/models/product.interface';

@Component({
    selector: 'guest-cost',
    templateUrl: 'guest-cost.component.html'
})

export class GuestCostComponent implements OnInit {
    public form: FormGroup;

    @Input()
    products: Product[];

    @Input()
    allProducts: Product[];

    ngOnInit() {
        this.setForm();
    }

    setForm() {
        this.form = new FormGroup({
            selector: new FormGroup({
                product_id: new FormControl(''),
                quantity: new FormControl(10),
                name: new FormControl('')
            }),
            stock: new FormArray([
                this.createStock({ product_id: 1, name: 'Polenguinho', quantity: 10 }),
                this.createStock({ product_id: 3, name: 'Manteiga', quantity: 50 }),
            ])
        })
    }

    addProduct(product) {
        if(product) {
            const control = this.form.get('stock') as FormArray;
            control.push(this.createStock(product));
        }
    }
    
    createStock(stock) {
        return new FormGroup({
            product_id: new FormControl(parseInt(stock.product_id, 10) || ''),
            quantity: new FormControl(stock.quantity || 10),
            name: new FormControl(stock.name || '')
        });
    }

    removeProduct({ group, index }: { group: FormGroup, index: number }) {
        const control = this.form.get('stock') as FormArray;
        control.removeAt(index);
    }

}