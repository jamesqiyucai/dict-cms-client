import { ComponentFactoryResolver, Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { ListManipulatorContainerComponent } from './list-manipulator-container/list-manipulator-container.component';

@Directive({
  selector: '[libListManipulator]'
})
export class ListManipulatorDirective {

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  @Input() public set models(elementModels: any[]) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ListManipulatorContainerComponent);
    const containerComponentRef = this.viewContainerRef.createComponent<ListManipulatorContainerComponent>(componentFactory);
    containerComponentRef.instance.data = this.templateRef;
    containerComponentRef.instance.model = elementModels;
  }

}
