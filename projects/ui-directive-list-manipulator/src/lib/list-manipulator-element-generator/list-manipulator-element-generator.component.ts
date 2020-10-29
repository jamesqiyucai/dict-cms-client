import { Component, ChangeDetectionStrategy, ViewContainerRef, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'lib-list-manipulator-element-generator',
  templateUrl: './list-manipulator-element-generator.component.html',
  styleUrls: ['./list-manipulator-element-generator.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListManipulatorElementGeneratorComponent {

  private _elementTemplate: TemplateRef<any>;
  private _elementModel: any;

  constructor(
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input() public set elementTemplate(template: TemplateRef<any>) {
    this._elementTemplate = template;
    this.generateElementComponent();
  }

  @Input() public set elementModel(model: any) {
    this._elementModel = model;
    this.generateElementComponent();
  }

  private generateElementComponent(): void {
    if (this._elementTemplate && this._elementModel) {
      this.viewContainerRef.createEmbeddedView(this._elementTemplate, {$implicit: this._elementModel});
    }
  }

}
