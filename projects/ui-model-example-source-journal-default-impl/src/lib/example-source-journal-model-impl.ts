import {ExampleSourceJournalModel} from 'ui-component-example-source-journal';
import {SourceType} from 'ui-model-source-type';
import {BehaviorSubject, of} from 'rxjs';
import {SourceBaseModelImpl} from 'ui-model-source-base-default-impl';
import {mergeMap} from 'rxjs/operators';
import {ExampleSourceJournalDataModel} from 'ui-model-example-source-journal';

export class ExampleSourceJournalModelImpl extends SourceBaseModelImpl implements ExampleSourceJournalModel {
  protected _handle: ExampleSourceJournalDataModel;
  protected _authorBuffer$: BehaviorSubject<string | null>;
  protected _titleBuffer$: BehaviorSubject<string | null>;
  protected _pageBuffer$: BehaviorSubject<string | null>;
  protected _passageTitleBuffer$: BehaviorSubject<string | null>;
  protected _publishDateBuffer$: BehaviorSubject<string | null>;
  constructor(handle: ExampleSourceJournalDataModel) {
    super(SourceType.Journal);
    this._handle = handle;
    this._authorBuffer$ = new BehaviorSubject<string | null>(null);
    this._titleBuffer$ = new BehaviorSubject<string | null>(null);
    this._pageBuffer$ = new BehaviorSubject<string | null>(null);
    this._passageTitleBuffer$ = new BehaviorSubject<string | null>(null);
    this._publishDateBuffer$ = new BehaviorSubject<string | null>(null);
  }

  public get author$() {
    return this._authorBuffer$.asObservable().pipe(mergeMap(author => author != null ? of(author) : this._handle.author$));
  }
  public get journalTitle$() {
    return this._titleBuffer$.asObservable().pipe(mergeMap(title => title != null ? of(title) : this._handle.journalTitle$));
  }
  public get passageTitle$() {
    return this._passageTitleBuffer$.asObservable().pipe(mergeMap(title => title != null ? of(title) : this._handle.passageTitle$));
  }
  public get publishDate$() {
    return this._publishDateBuffer$.pipe(mergeMap(date => date != null ? of(date) : this._handle.publishingDate$));
  }
  public get page$() {
    return this._pageBuffer$.pipe(mergeMap(page => page != null ? of(page) : this._handle.page$));
  }
}
