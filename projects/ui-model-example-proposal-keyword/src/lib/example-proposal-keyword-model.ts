import {ExampleKeywordModel} from 'ui-model-example-keyword';

export interface ExampleProposalKeywordModel extends ExampleKeywordModel {
  setText(newText: string): void;
}
