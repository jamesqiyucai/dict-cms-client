import {ExampleProposalKeywordModelImpl} from './example-proposal-keyword-model-impl';
import {ExampleProposalKeywordModelFactory} from 'ui-model-example-proposal-keyword';
import {ExampleProposalKeywordDataModel} from 'ui-model-example-proposal-keyword';
import {ExampleProposalKeywordModel} from 'ui-component-example-proposal-keyword';

export class ExampleProposalKeywordModelFactoryImpl implements ExampleProposalKeywordModelFactory {
  getExampleProposalKeywordModel(handle: ExampleProposalKeywordDataModel): ExampleProposalKeywordModel {
    return new ExampleProposalKeywordModelImpl(handle);
  }
}
