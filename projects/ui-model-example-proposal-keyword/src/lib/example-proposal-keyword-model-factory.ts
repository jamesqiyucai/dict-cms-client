import {ExampleProposalKeywordModel} from './example-proposal-keyword-model';
import {ExampleProposalKeywordHandle} from 'service-example-proposal-keyword';

export interface ExampleProposalKeywordModelFactory {
  getExampleProposalKeywordModel(handle: ExampleProposalKeywordHandle): ExampleProposalKeywordModel;
}
