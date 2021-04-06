import {List} from 'immutable';
import {Observable} from 'rxjs';
import {Editable} from 'ui-model-editable';

export interface ListManipulatorModel extends Editable {
  models: Observable<List<any>>;
  deleteElement(index: number): void;
  moveElement(from: number, to: number): void;
  addElement(): void;
}
