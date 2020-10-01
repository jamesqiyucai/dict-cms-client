import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ViewableBookSourceModel} from '@dictcmsclient/ui-model-source';

@Component({
  selector: 'lib-reviewable-book-source',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'book-source-component.html'
})
export class ReviewableBookSourceComponent {
 @Input() public model: ViewableBookSourceModel;
 public get editable(): boolean {
   return false;
 }
}
