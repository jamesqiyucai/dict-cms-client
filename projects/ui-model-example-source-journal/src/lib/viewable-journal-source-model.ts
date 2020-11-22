import {Observable} from "rxjs";
import {JournalSourceModel} from "../../../ui-model-source/src/lib/journal_source/journal-source-model";

export interface ViewableJournalSourceModel extends JournalSourceModel {
  readonly author$: Observable<string>;
  readonly journalTitle$: Observable<string>;
  readonly page$: Observable<string>;
  readonly passageTitle$: Observable<string>;
  readonly publishDate$: Observable<string>;
}
