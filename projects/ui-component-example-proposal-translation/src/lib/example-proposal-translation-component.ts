import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ExampleProposalTranslationModel} from './example-proposal-translation-model';

@Component({
  selector: 'lib-example-proposal-translation',
  templateUrl: './example-proposal-translation-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleProposalTranslationComponent {
  @Input() model: ExampleProposalTranslationModel;
}
