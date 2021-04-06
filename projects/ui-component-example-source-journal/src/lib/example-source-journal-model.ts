import {Observable} from 'rxjs';
import {SourceBaseModel} from 'ui-component-source-base';

export interface ExampleSourceJournalModel extends SourceBaseModel {
  readonly author$: Observable<string>;
  readonly journalTitle$: Observable<string>;
  readonly page$: Observable<string>;
  readonly passageTitle$: Observable<string>;
  readonly publishDate$: Observable<string>;
}
