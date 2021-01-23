import {List} from 'immutable';
import {Observable} from 'rxjs';

export interface ListManipulatorModel {
  models: Observable<List<any>>;
  deleteElement(index: number): void;
  moveElement(from: number, to: number): void;
  addElement(): void;
}
