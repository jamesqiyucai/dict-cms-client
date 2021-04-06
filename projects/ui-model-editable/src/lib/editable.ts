export interface Editable {
  readonly editingEnabled: boolean;
  enableEditing(): void;
  disableEditing(): void;
}
