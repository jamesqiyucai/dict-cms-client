import {ExampleSourceJournalModel} from 'ui-component-example-source-journal';
import {Observable} from 'rxjs';
import {Editable} from 'ui-model-editable';

export interface ExampleProposalSourceJournalModel extends ExampleSourceJournalModel, Editable {
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
