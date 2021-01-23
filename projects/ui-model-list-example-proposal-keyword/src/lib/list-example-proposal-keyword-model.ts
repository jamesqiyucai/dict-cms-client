import {List} from 'immutable';
import {Observable} from 'rxjs';
import {ExampleProposalKeywordModel} from 'ui-model-example-proposal-keyword';

export interface ListExampleProposalKeywordsModel {
  keywords: Observable<List<ExampleProposalKeywordModel>>;
  moveKeyword(from: number, to: number): void;
  addKeyword(): void;
  deleteKeyword(index: number): void;
}
