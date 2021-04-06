import {ExampleKeywordModel} from 'ui-component-example-keyword';
import {ExampleKeywordDataModel} from './example-keyword-data-model';

export interface ExampleKeywordModelFactory {
  getExampleKeywordModel(handle: ExampleKeywordDataModel): ExampleKeywordModel;
}
