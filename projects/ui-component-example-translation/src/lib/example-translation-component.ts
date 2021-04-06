import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ExampleTranslationModel} from './example-translation-model';

@Component({
  selector: 'lib-example-translation',
  templateUrl: './example-translation-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleTranslationComponent {
  @Input() model: ExampleTranslationModel;
}
