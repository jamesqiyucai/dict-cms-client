import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {EditableBookSourceModelImpl} from '../../../../ui-model-source/src/lib/book_source/editable-book-source-model-impl';

@Component({
  selector: 'lib-editable-book-source',
  templateUrl: './book-source-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditableBookSourceComponent {
  @Input() public model: EditableBookSourceModelImpl;
}
