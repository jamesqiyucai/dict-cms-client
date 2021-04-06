import {Editable} from './editable';

type Constructor = new (...args: any[]) => {};

export function makeEditable<TBase extends Constructor>(Base: TBase) {
  return class EditableDefault extends Base implements Editable {
    #editable = true;
    public get editingEnabled(): boolean {
      return this.#editable;
    }
    public disableEditing(): void {
      this.#editable = false;
    }
    public enableEditing(): void {
      this.#editable = true;
    }
  };
}
