import {SourceFactory} from 'ui-model-source';
import {ExampleProposalSourceJournalModel} from './example-proposal-source-journal-model';
import {SourceType} from 'service-source';
import {ExampleProposalSourceJournalHandle} from 'service-example-proposal-source-journal';
import {ExampleProposalSourceJournalModelImpl} from './example-proposal-source-journal-model.impl';

function isExampleProposalSourceJournalHandle(handle: unknown): handle is ExampleProposalSourceJournalHandle {
  return handle && (handle as ExampleProposalSourceJournalHandle).type == SourceType.Journal && (handle as ExampleProposalSourceJournalHandle).editable == true;
}

export class ExampleProposalSourceJournalModelFactory implements SourceFactory {
  createSource(handle: unknown): ExampleProposalSourceJournalModel | null {
    return isExampleProposalSourceJournalHandle(handle) ? new ExampleProposalSourceJournalModelImpl(handle) : null;
  }
}
