import {Observable} from 'rxjs';
import {BaseSourceModel} from 'ui-model-source';

export interface ExampleSourceJournalModel extends BaseSourceModel {
  readonly author$: Observable<string>;
  readonly journalTitle$: Observable<string>;
  readonly page$: Observable<string>;
  readonly passageTitle$: Observable<string>;
  readonly publishDate$: Observable<string>;
}
