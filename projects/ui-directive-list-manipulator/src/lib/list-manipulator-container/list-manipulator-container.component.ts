import { Component, OnInit, ChangeDetectionStrategy, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'lib-list-manipulator-container',
  templateUrl: './list-manipulator-container.component.html',
  styleUrls: ['./list-manipulator-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListManipulatorContainerComponent implements OnInit {

  private childTemplate: TemplateRef<any>;

  private elementModels: any[];

  @Input() public set data(newData: TemplateRef<any>) {
    this.childTemplate = newData;
    
  }

  @Input() public set model(elementModels: any[]) {
    this.elementModels = elementModels;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
