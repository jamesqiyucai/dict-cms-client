import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ExampleProposalSourceJournalModel} from './example-proposal-source-journal-model';

@Component({
  selector: 'lib-example-proposal-source-journal',
  templateUrl: './example-proposal-source-journal-component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleProposalSourceJournalComponent {
  @Input() public model: ExampleProposalSourceJournalModel;
  constructor() { }
}
