import {ExampleProposalSourceJournalModel} from 'ui-component-example-proposal-source-journal';
import {SourceType} from 'ui-model-source-type';
import {ExampleProposalSourceJournalModelImpl} from './example-proposal-source-journal-model.impl';
import {ExampleProposalSourceJournalDataModel, ExampleProposalSourceJournalModelFactory} from 'ui-model-example-proposal-source-journal';

function isExampleProposalSourceJournalHandle(handle: unknown): handle is ExampleProposalSourceJournalDataModel {
  return handle && (handle as ExampleProposalSourceJournalDataModel).type == SourceType.Journal;
}

export class ExampleProposalSourceJournalModelDefaultFactory implements ExampleProposalSourceJournalModelFactory {
  getSource(handle: unknown): ExampleProposalSourceJournalModel | null {
    return isExampleProposalSourceJournalHandle(handle) ? new ExampleProposalSourceJournalModelImpl(handle) : null;
  }
}
