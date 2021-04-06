import {ExampleProposalKeywordModel} from 'ui-component-example-proposal-keyword';
import {ExampleProposalKeywordDataModel} from './example-proposal-keyword-data-model';

export interface ExampleProposalKeywordModelFactory {
  getExampleProposalKeywordModel(handle: ExampleProposalKeywordDataModel): ExampleProposalKeywordModel;
}
