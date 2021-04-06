import { Component, ChangeDetectionStrategy, TemplateRef, Input } from '@angular/core';
import {ListManipulatorModel} from '../list-manipulator-model';
import {List} from 'immutable';
import {Observable} from 'rxjs';
import {CdkDragDrop} from '@angular/cdk/drag-drop';

@Component({
  selector: 'lib-list-manipulator-container',
  templateUrl: './list-manipulator-container.component.html',
  styleUrls: ['./list-manipulator-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListManipulatorContainerComponent {

  private childTemplate: TemplateRef<any>;

  private _listModel: ListManipulatorModel;

  constructor() { }

  public get elementModels(): Observable<List<any>> {
    return this._listModel.models;
  }

  public get elementTemplate(): TemplateRef<any> {
    return this.childTemplate;
  }

  @Input() public set data(newData: TemplateRef<any>) {
    this.childTemplate = newData;
  }

  @Input() public set model(elementModels: ListManipulatorModel) {
    this._listModel = elementModels;
  }
  public get draggingDisabled() {
    return !this.model.editingEnabled;
  }
  public drop(event: CdkDragDrop<any>) {
    this._listModel.moveElement(event.previousIndex, event.currentIndex);
  }
  public add() {
    this._listModel.addElement();
  }
  public remove(index: number) {
    this._listModel.deleteElement(index);
  }
}
