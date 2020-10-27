import { Directive, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[libListManipulator]'
})
export class ListManipulatorDirective {

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

}
