import {ExampleSourceBookModel} from 'ui-component-example-source-book';
import {SourceFactory} from 'ui-model-source-base';
import {ExampleSourceBookDataModel} from './example-source-book-data-model';

export interface ExampleSourceBookModelFactory extends SourceFactory {
  getSource(handle: ExampleSourceBookDataModel): ExampleSourceBookModel;
}
