import {
  ListExampleProposalKeywordDataModel,
  ListExampleProposalKeywordModelFactory
} from 'ui-model-list-example-proposal-keyword';
import {ExampleProposalKeywordModelFactory} from 'ui-model-example-proposal-keyword';
import {ListManipulatorModel} from 'ui-directive-list-manipulator';
import {ListExampleProposalKeywordModelImpl} from './list-example-proposal-keyword-model-impl';

export class ListExampleProposalKeywordModelDefaultFactory implements ListExampleProposalKeywordModelFactory {
  constructor(private handle: ListExampleProposalKeywordDataModel, private keywordFactory: ExampleProposalKeywordModelFactory) {}
  getListExampleProposalKeywordModel(handle: ListExampleProposalKeywordDataModel): ListManipulatorModel {
    return new ListExampleProposalKeywordModelImpl(this.handle, this.keywordFactory);
  }
}
