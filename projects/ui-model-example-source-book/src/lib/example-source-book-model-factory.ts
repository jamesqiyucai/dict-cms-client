import {ExampleSourceBookModel} from './example-source-book-model';
import {ExampleSourceBookHandle} from 'service-example-source-book';
import {SourceFactory} from 'ui-model-source';

export interface ExampleSourceBookModelFactory extends SourceFactory {
  getSource(handle: ExampleSourceBookHandle): ExampleSourceBookModel;
}
