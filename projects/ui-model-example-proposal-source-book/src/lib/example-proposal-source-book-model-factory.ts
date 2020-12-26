import {SourceFactory} from 'ui-model-source';
import {SourceType} from 'service-source';
import {ExampleProposalSourceBookHandle} from 'service-example-proposal-source-book';
import {ExampleProposalSourceBookModelImpl} from './example-proposal-source-book-model-impl';
import {ExampleProposalSourceBookModel} from './example-proposal-source-book-model';

function isExampleProposalSourceBookHandle(handle: unknown): handle is ExampleProposalSourceBookHandle {
  return handle && (handle as ExampleProposalSourceBookHandle).type == SourceType.Book && (handle as ExampleProposalSourceBookHandle).editable == true;
}

export class ExampleProposalSourceBookModelFactory implements SourceFactory {
  createSource(handle: unknown): ExampleProposalSourceBookModel | null {
    if (isExampleProposalSourceBookHandle(handle)) {
      return new ExampleProposalSourceBookModelImpl(handle);
    } else {
      return null;
    }
  }
}
