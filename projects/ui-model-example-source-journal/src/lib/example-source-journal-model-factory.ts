import {ExampleSourceJournalModel} from 'ui-component-example-source-journal';
import {SourceFactory} from 'ui-model-source-base';
import {ExampleSourceJournalDataModel} from './example-source-journal-data-model';

export interface ExampleSourceJournalModelFactory extends SourceFactory {
  getSource(handle: ExampleSourceJournalDataModel): ExampleSourceJournalModel | null;
}
