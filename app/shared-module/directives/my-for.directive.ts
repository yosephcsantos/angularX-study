import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})

export class MyForDirective {

  @Input()
  set myForOf(collection) {
    if(collection) {
        this.view.clear();
        collection.forEach((item, index) => {
        this.view.createEmbeddedView(this.template, {
            $implicit: item,
            index
        });
        });
    }
  }

  constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

}