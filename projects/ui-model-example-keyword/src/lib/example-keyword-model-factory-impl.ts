import {ExampleKeywordModelImpl} from './example-keyword-model-impl';
import {ExampleKeywordHandle} from 'service-example-keyword';
import {ExampleKeywordModelFactory} from './example-keyword-model-factory';

export class ExampleKeywordModelFactoryImpl implements ExampleKeywordModelFactory {
  getExampleKeywordModel(handle: ExampleKeywordHandle) {
    return new ExampleKeywordModelImpl(handle);
  }
} 
