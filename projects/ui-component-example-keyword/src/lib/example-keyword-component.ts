import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ExampleKeywordModel} from './example-keyword-model';

@Component({
  selector: 'lib-example-keyword',
  templateUrl: './example-keyword-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleKeywordComponent {
  @Input() model: ExampleKeywordModel;
}
