import {ExampleSourceJournalModelFactory, ExampleSourceJournalDataModel} from 'ui-model-example-source-journal';
import {ExampleSourceJournalModel} from 'ui-component-example-source-journal';
import {SourceType} from 'ui-model-source-type';
import {ExampleSourceJournalModelImpl} from './example-source-journal-model-impl';

function isExampleSourceJournalHandle(handle: unknown): handle is ExampleSourceJournalDataModel {
  return handle && (handle as ExampleSourceJournalDataModel).type == SourceType.Journal;
}

export class ExampleSourceJournalModelDefaultFactory implements ExampleSourceJournalModelFactory {
  getSource(handle: unknown): ExampleSourceJournalModel | null {
    return isExampleSourceJournalHandle(handle) ? new ExampleSourceJournalModelImpl(handle) : null;
  }
}
