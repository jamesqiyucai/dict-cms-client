import {ExampleSourceJournalModelFactory} from './example-source-journal-model-factory';
import {ExampleSourceJournalModel} from './example-source-journal-model';
import {SourceType} from 'service-source';
import {ExampleSourceJournalModelImpl} from './example-source-journal-model-impl';
import {ExampleSourceJournalHandle} from 'service-example-source-journal';

function isExampleSourceJournalHandle(handle: unknown): handle is ExampleSourceJournalHandle {
  return handle && (handle as ExampleSourceJournalHandle).type == SourceType.Journal && (handle as ExampleSourceJournalHandle).editable == false;
}

export class ExampleSourceJournalModelFactoryImpl implements ExampleSourceJournalModelFactory {
  getSource(handle: unknown): ExampleSourceJournalModel | null {
    return isExampleSourceJournalHandle(handle) ? new ExampleSourceJournalModelImpl(handle) : null;
  }
}
