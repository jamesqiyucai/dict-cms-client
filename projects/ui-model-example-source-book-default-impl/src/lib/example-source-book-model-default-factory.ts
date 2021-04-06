import {ExampleSourceBookModelImpl} from './example-source-book-model-impl';
import {SourceType} from 'ui-model-source-type';
import {ExampleSourceBookModel} from 'ui-component-example-source-book';
import {ExampleSourceBookDataModel, ExampleSourceBookModelFactory} from 'ui-model-example-source-book';

function isExampleSourceBookHandle(handle: unknown): handle is ExampleSourceBookDataModel {
  return handle && (handle as ExampleSourceBookDataModel).type == SourceType.Book;
}

export class ExampleSourceBookModelDefaultFactory implements ExampleSourceBookModelFactory {
  getSource(handle: unknown): ExampleSourceBookModel | null {
    if (isExampleSourceBookHandle(handle)) {
      return new ExampleSourceBookModelImpl(handle);
    } else {
      return null;
    }
  }
}
