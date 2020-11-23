import {SourceFactory} from 'ui-model-source';
import {ExampleSourceBookModelImpl} from './example-source-book-model-impl';
import {SourceHandle, SourceType} from 'service-source';
import {ExampleSourceBookHandle} from 'service-example-source-book';
import {ExampleSourceBookModel} from './example-source-book-model';

function isViewableBookSourceHandle(handle: unknown): handle is ExampleSourceBookHandle {
  return handle && (handle as SourceHandle).type == SourceType.Book && (handle as SourceHandle).editable == false;
}

export class ViewableBookSourceModelFactory implements SourceFactory {
  createSource(handle: unknown): ExampleSourceBookModel | null {
    if (isViewableBookSourceHandle(handle)) {
      return new ExampleSourceBookModelImpl(handle);
    } else {
      return null;
    }
  }

}
