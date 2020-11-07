import {Observable} from 'rxjs';
import {SourceHandle} from 'service-source';

export interface ExampleSourceJournalHandle extends SourceHandle {
  readonly author$: Observable<string>;
  readonly journalTitle$: Observable<string>;
  readonly page$: Observable<string>;
  readonly passageTitle$: Observable<string>;
  readonly publishingDate$: Observable<string>;
}
