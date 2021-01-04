import {ExampleSourceBookModel} from './example-source-book-model';
import {ExampleSourceBookHandle} from 'service-example-source-book';

export interface ExampleSourceBookModelFactory {
  getExampleSourceBookModel(handle: ExampleSourceBookHandle): ExampleSourceBookModel;
}
