import {ExampleSourceJournalModel} from 'ui-model-example-source-journal';
import {Editable} from 'ui-model-editable';
import {Observable} from 'rxjs';

export interface ExampleProposalSourceJournalModel extends Editable, ExampleSourceJournalModel {
  readonly authorEmpty$: Observable<boolean>;
  readonly journalTitleEmpty$: Observable<boolean>;
  readonly pageEmpty$: Observable<boolean>;
  readonly passageTitleEmpty$: Observable<boolean>;
  readonly publishDateEmpty$: Observable<boolean>;
  readonly publishDateInFuture$: Observable<boolean>;
  readonly validationFail$: Observable<boolean>;
  setAuthor(newAuthor: string): void;
  setJournalTitle(newTitle: string): void;
  setPage(newPage: string): void;
  setPassageTitle(newTitle: string): void;
  setPublishDate(newDate: string): void;
}
