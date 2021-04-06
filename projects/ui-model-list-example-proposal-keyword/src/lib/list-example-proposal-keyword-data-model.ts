import {Observable} from 'rxjs';
import {List} from 'immutable';
import {ExampleProposalKeywordDataModel} from 'ui-model-example-proposal-keyword';

export interface ListExampleProposalKeywordDataModel {
  keywords: Observable<List<ExampleProposalKeywordDataModel>>;
  addKeyword(): void;
  removeKeyword(index: number): void;
  moveKeyword(from: number, to: number): void;
}
