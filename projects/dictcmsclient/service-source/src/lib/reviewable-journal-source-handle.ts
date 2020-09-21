import {SourceHandle} from "./source-handle";
import {Observable} from "rxjs";

export interface ReviewableJournalSourceHandle extends SourceHandle {
  readonly author$: Observable<string>;
  readonly journalTitle$: Observable<string>;
  readonly page$: Observable<string>;
  readonly passageTitle$: Observable<string>;
  readonly publishingDate$: Observable<string>;
}
