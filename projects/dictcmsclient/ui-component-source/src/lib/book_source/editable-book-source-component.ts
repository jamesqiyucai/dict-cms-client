import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'lib-editable-book-source',
  templateUrl: './book-source-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditableBookSourceComponent {
  @Input() public model: ;

  public get editable(): boolean {
    return this.model.
  }
}
