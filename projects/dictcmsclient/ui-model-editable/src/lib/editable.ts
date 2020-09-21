export interface Editable {
  readonly editable: boolean;
  enableEditing(): void;
  disableEditing(): void;
}
