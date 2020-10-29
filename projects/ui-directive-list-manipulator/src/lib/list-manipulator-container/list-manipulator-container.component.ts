import { Component, OnInit, ChangeDetectionStrategy, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'lib-list-manipulator-container',
  templateUrl: './list-manipulator-container.component.html',
  styleUrls: ['./list-manipulator-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListManipulatorContainerComponent {

  private childTemplate: TemplateRef<any>;

  private _elementModels: any[];

  constructor() { }

  public get elementModels(): any[] {
    return this._elementModels;
  }

  public get elementTemplate(): TemplateRef<any> {
    return this.childTemplate;
  }

  @Input() public set data(newData: TemplateRef<any>) {
    this.childTemplate = newData;
  }

  @Input() public set model(elementModels: any[]) {
    this._elementModels = elementModels;
  }

}
