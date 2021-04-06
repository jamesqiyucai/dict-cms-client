import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ExampleProposalKeywordModel} from './example-proposal-keyword-model';

@Component({
  selector: 'lib-example-proposal-keyword',
  templateUrl: './example-proposal-keyword-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleProposalKeywordComponent {
  @Input() model: ExampleProposalKeywordModel;
}
