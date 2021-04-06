import {ListExampleProposalKeywordDataModel} from './list-example-proposal-keyword-data-model';
import {ListManipulatorModel} from 'ui-directive-list-manipulator';
import {ExampleProposalKeywordModelFactory} from 'ui-model-example-proposal-keyword';

export interface ListExampleProposalKeywordModelFactory {
  getListExampleProposalKeywordModel(handle: ListExampleProposalKeywordDataModel, keywordFactory: ExampleProposalKeywordModelFactory): ListManipulatorModel;
}
