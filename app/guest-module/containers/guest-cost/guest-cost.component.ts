import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

// models
import { Guest } from './../../../shared-module/models/guest.interface';
import { Product, Item } from './../../../shared-module/models/product.interface';

//resources
import { GuestDashboardResource } from './../../../shared-module/resources/guest-dashboard.resource'

@Component({
    selector: 'guest-cost',
    templateUrl: 'guest-cost.component.html'
})

export class GuestCostComponent implements OnInit {
    public form: FormGroup;
    public productMap: Map<number, Product>;
    public total: number;

    @Output()
    updated = new EventEmitter<Product>(); // id, preço

    @Input()
    products: Product[];

    @Input()
    allProducts: Product[];
    
    constructor(
        private guestDashboardResource: GuestDashboardResource
    ){}

    ngOnInit() {
        this.setForm();

        const cart = this.guestDashboardResource.getCartItems();
        const products = this.guestDashboardResource.getProducts();
        
        Observable
        .forkJoin(cart, products)
        .subscribe(([cart, products]: [Item[], Product[]]) => {
          const myMap = products
            .map<[number, Product]>(product => [product.product_id, product]);
          this.productMap = new Map<number, Product>(myMap);
          cart.forEach(item => this.addProduct(item));

          this.calculateTotal(this.form.get('stock').value);
          this.form.get('stock')
            .valueChanges.subscribe(value => this.calculateTotal(value));
        });
    }

    calculateTotal(value: Item[]) {
        const total = value.reduce((prev, next) => {
            return prev + (next.quantity * this.productMap.get(next.product_id).price);
        }, 0);
        
        this.total = total;
    }

    setForm() {
        this.form = new FormGroup({
            selector: new FormGroup({
                product_id: new FormControl(''),
                quantity: new FormControl(10)
            }),
            stock: new FormArray([])
        })
    }

    addProduct(stock) {
        const control = this.form.get('stock') as FormArray;
        control.push(this.createStock(stock));
    }
    
    createStock(stock) {
        return new FormGroup({
            product_id: new FormControl(parseInt(stock.product_id, 10) || ''),
            quantity: new FormControl(stock.quantity || 10)
        });
    }

    removeProduct({ group, index }: { group: FormGroup, index: number }) {
        const controlArray = this.getControlArrayOfStock();
        controlArray.removeAt(index);
    }

    updateProduct({ group, index }: { group: FormGroup, index: number }) {
        const controlArray = this.getControlArrayOfStock();
        const control = controlArray.at(index) as FormControl;
        const product = this.productMap.get(control.get('product_id').value);
        this.updated.emit(product);
    }

    private getControlArrayOfStock(): FormArray{
        return this.form.get('stock') as FormArray;
    }
}