import {ExampleKeywordModelImpl} from './example-keyword-model-impl';
import {ExampleKeywordModelFactory} from 'ui-model-example-keyword';
import {ExampleKeywordDataModel} from 'ui-model-example-keyword';

export class ExampleKeywordModelFactoryImpl implements ExampleKeywordModelFactory {
  getExampleKeywordModel(handle: ExampleKeywordDataModel) {
    return new ExampleKeywordModelImpl(handle);
  }
}
