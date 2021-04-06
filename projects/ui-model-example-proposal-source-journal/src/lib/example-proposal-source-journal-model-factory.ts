import {SourceFactory} from 'ui-model-source-base';
import {ExampleProposalSourceJournalDataModel} from './example-proposal-source-journal-data-model';
import {ExampleProposalSourceJournalModel} from 'ui-component-example-proposal-source-journal';

export interface ExampleProposalSourceJournalModelFactory extends SourceFactory {
  getSource(handle: ExampleProposalSourceJournalDataModel): ExampleProposalSourceJournalModel | null;
}
