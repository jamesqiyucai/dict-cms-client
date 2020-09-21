import {Editable} from './editable';

export abstract class EditableModel implements Editable {
  // tslint:disable-next-line:variable-name
  private _editable = true;
  public get editable(): boolean {
    return this._editable;
  }
  public disableEditing(): void {
    this._editable = false;
  }
  public enableEditing(): void {
    this._editable = true;
  }

}
