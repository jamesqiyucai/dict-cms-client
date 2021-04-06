import {ExampleKeywordDataModel} from 'ui-model-example-keyword';

export interface ExampleProposalKeywordDataModel extends ExampleKeywordDataModel {
  setKeyword(newKeyword: string): void;
}
