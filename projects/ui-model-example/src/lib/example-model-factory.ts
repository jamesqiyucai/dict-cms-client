import {ExampleModel} from './example-model';
import {ExampleHandle} from 'service-example';

export interface ExampleModelFactory {
  getExample(handle: ExampleHandle): ExampleModel;
}
