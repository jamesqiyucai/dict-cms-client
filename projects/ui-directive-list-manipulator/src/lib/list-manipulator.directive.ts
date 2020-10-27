import { createComponent } from '@angular/compiler/src/core';
import { ComponentFactoryResolver, Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';
import { ListManipulatorContainerComponent } from './list-manipulator-container/list-manipulator-container.component';

@Directive({
  selector: '[libListManipulator]'
})
export class ListManipulatorDirective implements OnInit {

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ListManipulatorContainerComponent);
    const containerComponentRef = this.viewContainerRef.createComponent<ListManipulatorContainerComponent>(componentFactory);
    containerComponentRef.instance.data = this.templateRef;
  }

  @Input() public set models(elementModels: any[]) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ListManipulatorContainerComponent);
    const containerComponentRef = this.viewContainerRef.createComponent<ListManipulatorContainerComponent>(componentFactory);
    containerComponentRef.instance.data = this.templateRef;
    containerComponentRef.instance.model = elementModels;
  }

}
