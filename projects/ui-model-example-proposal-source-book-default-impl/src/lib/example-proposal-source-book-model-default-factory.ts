import {SourceType} from 'ui-model-source-type';
import {ExampleProposalSourceBookModelImpl} from './example-proposal-source-book-model-impl';
import {ExampleProposalSourceBookModel} from 'ui-component-example-proposal-source-book';
import {ExampleProposalSourceBookDataModel, ExampleProposalSourceBookModelFactory} from 'ui-model-example-proposal-source-book';

function isExampleProposalSourceBookHandle(handle: unknown): handle is ExampleProposalSourceBookDataModel {
  return handle && (handle as ExampleProposalSourceBookDataModel).type == SourceType.Book;
}

export class ExampleProposalSourceBookModelDefaultFactory implements ExampleProposalSourceBookModelFactory {
  getSource(handle: unknown): ExampleProposalSourceBookModel | null {
    if (isExampleProposalSourceBookHandle(handle)) {
      return new ExampleProposalSourceBookModelImpl(handle);
    } else {
      return null;
    }
  }
}
