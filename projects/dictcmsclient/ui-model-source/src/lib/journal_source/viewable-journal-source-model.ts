import {Observable} from "rxjs";
import {JournalSourceModel} from "./journal-source-model";

export interface ViewableJournalSourceModel extends JournalSourceModel {
  readonly author$: Observable<string>;
  readonly journalTitle$: Observable<string>;
  readonly page$: Observable<string>;
  readonly passageTitle$: Observable<string>;
  readonly publishDate$: Observable<string>;
}
