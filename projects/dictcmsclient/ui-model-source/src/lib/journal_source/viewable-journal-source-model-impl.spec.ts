import {ReviewableJournalSourceHandle, SourceType} from "@dictcmsclient/service-source";
import {BehaviorSubject} from "rxjs";
import {ViewableJournalSourceModelFactory} from "./viewable-journal-source-model-factory";
import {ViewableJournalSourceModelImpl} from "./viewable-journal-source-model-impl";
import {skip} from "rxjs/operators";

export class FakeReviewableJournalSourceHandle implements ReviewableJournalSourceHandle {
  readonly author$ = new BehaviorSubject('');
  editable = false;
  readonly journalTitle$ = new BehaviorSubject('');
  readonly page$ = new BehaviorSubject('');
  passageTitle$ = new BehaviorSubject('');
  publishingDate$ = new BehaviorSubject('');
  type = SourceType.Journal;
}

describe('ViewableJournalSourceModelImpl tests', () => {

  describe('initialization logic tests including its factory', () => {
    it('should not initialize if given a handle with wrong type', function() {
      const handle = new FakeReviewableJournalSourceHandle();
      handle.type = SourceType.Book;
      const model = new ViewableJournalSourceModelFactory().createSource(handle);
      expect(model).toBeNull();
    });
    it('should not initialize if given a handle with wrong editable', function() {
      const handle = new FakeReviewableJournalSourceHandle();
      handle.type = SourceType.Journal;
      handle.editable = true;
      const model = new ViewableJournalSourceModelFactory().createSource(handle);
      expect(model).toBeNull();
    });
    it('should initialize given the right type and editable', function() {
      const handle = new FakeReviewableJournalSourceHandle();
      const model = new ViewableJournalSourceModelFactory().createSource(handle);
      expect(model).toBeInstanceOf(ViewableJournalSourceModelImpl);
    });
  });

  describe('type property test', () => {
    it('should have the book type', function() {
      const handle = new FakeReviewableJournalSourceHandle();
      const model = new ViewableJournalSourceModelFactory().createSource(handle);
      expect(model.type).toEqual(SourceType.Journal);
    });
  });

  describe('author$ property test', () => {
    it('should emit all the author$ values emitted from handle', function() {
      const handle = new FakeReviewableJournalSourceHandle();
      const model = new ViewableJournalSourceModelFactory().createSource(handle);
      let subscription = model.author$.pipe().subscribe(value => expect(value).toEqual(''));
      subscription.unsubscribe();
      subscription = model.author$.pipe(skip(1)).subscribe(value => expect(value).toEqual(''));
      handle.author$.next('');
      subscription.unsubscribe();
      subscription = model.author$.pipe(skip(1)).subscribe(value => expect(value).toEqual('sherwood'));
      handle.author$.next('sherwood');
      subscription.unsubscribe();
      subscription = model.author$.pipe(skip(1)).subscribe(value => expect(value).toBeNull());
      handle.author$.next(null);
      subscription.unsubscribe();
      subscription = model.author$.pipe(skip(1)).subscribe(value => expect(value).toBeUndefined(undefined));
      handle.author$.next(undefined);
      subscription.unsubscribe();
    });
  });

  describe('journalTitle$ property test', () => {
    it('should emit all the journalTitle$ values emitted from handle', function() {
      const handle = new FakeReviewableJournalSourceHandle();
      const model = new ViewableJournalSourceModelFactory().createSource(handle);
      let subscription = model.journalTitle$.pipe().subscribe(value => expect(value).toEqual(''));
      subscription.unsubscribe();
      subscription = model.journalTitle$.pipe(skip(1)).subscribe(value => expect(value).toEqual(''));
      handle.journalTitle$.next('');
      subscription.unsubscribe();
      subscription = model.journalTitle$.pipe(skip(1)).subscribe(value => expect(value).toEqual('sherwood'));
      handle.journalTitle$.next('sherwood');
      subscription.unsubscribe();
      subscription = model.journalTitle$.pipe(skip(1)).subscribe(value => expect(value).toBeNull());
      handle.journalTitle$.next(null);
      subscription.unsubscribe();
      subscription = model.journalTitle$.pipe(skip(1)).subscribe(value => expect(value).toBeUndefined(undefined));
      handle.journalTitle$.next(undefined);
      subscription.unsubscribe();
    });
  });

  describe('page$ property test', () => {
    it('should emit all the page$ values emitted from handle', function() {
      const handle = new FakeReviewableJournalSourceHandle();
      const model = new ViewableJournalSourceModelFactory().createSource(handle);
      let subscription = model.page$.subscribe(value => expect(value).toEqual(''));
      subscription.unsubscribe();
      subscription = model.page$.pipe(skip(1)).subscribe(value => expect(value).toEqual(''));
      handle.page$.next('');
      subscription.unsubscribe();
      subscription = model.page$.pipe(skip(1)).subscribe(value => expect(value).toEqual('sherwood'));
      handle.page$.next('sherwood');
      subscription.unsubscribe();
      subscription = model.page$.pipe(skip(1)).subscribe(value => expect(value).toBeNull());
      handle.page$.next(null);
      subscription.unsubscribe();
      subscription = model.page$.pipe(skip(1)).subscribe(value => expect(value).toBeUndefined(undefined));
      handle.page$.next(undefined);
      subscription.unsubscribe();
    });
  });

  describe('passageTitle$ property test', () => {
    it('should emit all the passageTitle$ values emitted from handle', function() {
      const handle = new FakeReviewableJournalSourceHandle();
      const model = new ViewableJournalSourceModelFactory().createSource(handle);
      let subscription = model.passageTitle$.pipe().subscribe(value => expect(value).toEqual(''));
      subscription.unsubscribe();
      subscription = model.passageTitle$.pipe(skip(1)).subscribe(value => expect(value).toEqual(''));
      handle.passageTitle$.next('');
      subscription.unsubscribe();
      subscription = model.passageTitle$.pipe(skip(1)).subscribe(value => expect(value).toEqual('sherwood'));
      handle.passageTitle$.next('sherwood');
      subscription.unsubscribe();
      subscription = model.passageTitle$.pipe(skip(1)).subscribe(value => expect(value).toBeNull());
      handle.passageTitle$.next(null);
      subscription.unsubscribe();
      subscription = model.passageTitle$.pipe(skip(1)).subscribe(value => expect(value).toBeUndefined(undefined));
      handle.passageTitle$.next(undefined);
      subscription.unsubscribe();
    });
  });

  describe('publishDate$ property test', () => {
    it('should emit all the publishDate$ values emitted from handle', function() {
      const handle = new FakeReviewableJournalSourceHandle();
      const model = new ViewableJournalSourceModelFactory().createSource(handle);
      let subscription = model.publishDate$.pipe().subscribe(value => expect(value).toEqual(''));
      subscription.unsubscribe();
      subscription = model.publishDate$.pipe(skip(1)).subscribe(value => expect(value).toEqual(''));
      handle.publishingDate$.next('');
      subscription.unsubscribe();
      subscription = model.publishDate$.pipe(skip(1)).subscribe(value => expect(value).toEqual('sherwood'));
      handle.publishingDate$.next('sherwood');
      subscription.unsubscribe();
      subscription = model.publishDate$.pipe(skip(1)).subscribe(value => expect(value).toBeNull());
      handle.publishingDate$.next(null);
      subscription.unsubscribe();
      subscription = model.publishDate$.pipe(skip(1)).subscribe(value => expect(value).toBeUndefined(undefined));
      handle.publishingDate$.next(undefined);
      subscription.unsubscribe();
    });
  });

});
