import {ExampleProposalKeywordModelImpl} from './example-proposal-keyword-model-impl';
import {ExampleProposalKeywordHandle} from 'service-example-proposal-keyword';
import {ExampleProposalKeywordModelFactory} from './example-proposal-keyword-model-factory';

export class ExampleProposalKeywordModelFactoryImpl implements ExampleProposalKeywordModelFactory {
  getExampleProposalKeywordModel(handle: ExampleProposalKeywordHandle) {
    return new ExampleProposalKeywordModelImpl(handle);
  }
}
