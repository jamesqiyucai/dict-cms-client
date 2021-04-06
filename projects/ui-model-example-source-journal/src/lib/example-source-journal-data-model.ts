import {Observable} from 'rxjs';
import {SourceBaseDataModel} from 'ui-model-source-base';

export interface ExampleSourceJournalDataModel extends SourceBaseDataModel {
  readonly author$: Observable<string>;
  readonly journalTitle$: Observable<string>;
  readonly page$: Observable<string>;
  readonly passageTitle$: Observable<string>;
  readonly publishingDate$: Observable<string>;
}
