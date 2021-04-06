import {Observable} from 'rxjs';
import {List} from 'immutable';
import {ExampleProposalTranslationDataModel} from 'ui-model-example-proposal-translation';

export interface ListExampleProposalTranslationDataModel {
  translations: Observable<List<ExampleProposalTranslationDataModel>>;
  addTranslation(): void;
  moveTranslation(from: number, to: number): void;
  removeTranslation(index: number): void;
}
