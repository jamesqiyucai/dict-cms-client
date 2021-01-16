import {ExampleSourceJournalModel} from './example-source-journal-model';
import {SourceFactory} from 'ui-model-source';
import {ExampleSourceJournalHandle} from 'service-example-source-journal';

export interface ExampleSourceJournalModelFactory extends SourceFactory {
  getSource(handle: ExampleSourceJournalHandle): ExampleSourceJournalModel | null;
}
