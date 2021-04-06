import {ExampleSourceBookModel} from 'ui-component-example-source-book';
import {Observable} from 'rxjs';
import {Editable} from 'ui-model-editable';

export interface ExampleProposalSourceBookModel extends ExampleSourceBookModel, Editable {
  readonly authorEmpty$: Observable<boolean>;
  readonly titleEmpty$: Observable<boolean>;
  readonly pageEmpty$: Observable<boolean>;
  readonly initialPublishYearEmpty$: Observable<boolean>;
  readonly initialPublishYearInFuture$: Observable<boolean>;
  readonly publishYearEmpty$: Observable<boolean>;
  readonly publishYearInFuture$: Observable<boolean>;
  readonly publishPlaceEmpty$: Observable<boolean>;
  readonly validationFail$: Observable<boolean>;
  setAuthor(newAuthor: string): void;
  setTitle(newTitle: string): void;
  setPage(newPage: string): void;
  setInitialPublishYear(newYear: string): void;
  setPublishYear(newYear: string): void;
  setPublishPlace(newPlace: string): void;
}
