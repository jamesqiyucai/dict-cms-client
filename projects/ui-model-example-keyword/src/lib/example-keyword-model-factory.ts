import {ExampleKeywordModel} from './example-keyword-model';
import {ExampleKeywordHandle} from 'service-example-keyword';

export interface ExampleKeywordModelFactory {
  getExampleKeywordModel(handle: ExampleKeywordHandle): ExampleKeywordModel;
}
