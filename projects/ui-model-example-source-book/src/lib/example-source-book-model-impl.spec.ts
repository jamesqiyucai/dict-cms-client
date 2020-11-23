import {ReviewableBookSourceHandle, SourceType} from "@dictcmsclient/service-source";
import {BehaviorSubject} from "rxjs";
import {ViewableBookSourceModelFactory} from "./example-source-book-model-factory";
import {ViewableBookSourceModelImpl} from "./example-source-book-model-impl";
import {skip} from "rxjs/operators";

export class FakeReviewableBookSourceHandle implements ReviewableBookSourceHandle {
  type: SourceType = SourceType.Book;
  readonly author$ = new BehaviorSubject('');
  editable = false;
  readonly initialPublishYear$ = new BehaviorSubject('');
  readonly page$ = new BehaviorSubject('');
  readonly publishPlace$ = new BehaviorSubject('');
  readonly publishYear$ = new BehaviorSubject('');
  readonly title$ = new BehaviorSubject('');
}

describe('ViewableBookSourceModelImpl tests', () => {

  describe('initialization logic tests including its factory', () => {
    it('should not initialize if given a handle with wrong type', function() {
      const handle = new FakeReviewableBookSourceHandle();
      handle.type = SourceType.Journal;
      const model = new ViewableBookSourceModelFactory().createSource(handle);
      expect(model).toBeNull();
    });
    it('should not initialize if given a handle with wrong editable', function() {
      const handle = new FakeReviewableBookSourceHandle();
      handle.type = SourceType.Book;
      handle.editable = true;
      const model = new ViewableBookSourceModelFactory().createSource(handle);
      expect(model).toBeNull();
    });
    it('should initialize given the right type and editable', function() {
      const handle = new FakeReviewableBookSourceHandle();
      const model = new ViewableBookSourceModelFactory().createSource(handle);
      expect(model).toBeInstanceOf(ViewableBookSourceModelImpl);
    });
  });

  describe('type property test', () => {
    it('should have the book type', function() {
      const handle = new FakeReviewableBookSourceHandle();
      const model = new ViewableBookSourceModelFactory().createSource(handle);
      expect(model.type).toEqual(SourceType.Book);
    });
  });

  describe('author$ property test', () => {
    it('should emit all the author values emitted from handle', function() {
      const handle = new FakeReviewableBookSourceHandle();
      const model = new ViewableBookSourceModelFactory().createSource(handle);
      let subscription = model.author$.pipe().subscribe(author => expect(author).toEqual(''));
      subscription.unsubscribe();
      subscription = model.author$.pipe(skip(1)).subscribe(author => expect(author).toEqual(''));
      handle.author$.next('');
      subscription.unsubscribe();
      subscription = model.author$.pipe(skip(1)).subscribe(author => expect(author).toEqual('sherwood'));
      handle.author$.next('sherwood');
      subscription.unsubscribe();
      subscription = model.author$.pipe(skip(1)).subscribe(author => expect(author).toBeNull());
      handle.author$.next(null);
      subscription.unsubscribe();
      subscription = model.author$.pipe(skip(1)).subscribe(author => expect(author).toBeUndefined(undefined));
      handle.author$.next(undefined);
      subscription.unsubscribe();
    });
  });

  describe('title$ property test', () => {
    it('should emit all the title values emitted from handle', function() {
      const handle = new FakeReviewableBookSourceHandle();
      const model = new ViewableBookSourceModelFactory().createSource(handle);
      let subscription = model.title$.pipe().subscribe(title => expect(title).toEqual(''));
      subscription.unsubscribe();
      subscription = model.title$.pipe(skip(1)).subscribe(title => expect(title).toEqual(''));
      handle.title$.next('');
      subscription.unsubscribe();
      subscription = model.title$.pipe(skip(1)).subscribe(title => expect(title).toEqual('sherwood'));
      handle.title$.next('sherwood');
      subscription.unsubscribe();
      subscription = model.title$.pipe(skip(1)).subscribe(title => expect(title).toBeNull());
      handle.title$.next(null);
      subscription.unsubscribe();
      subscription = model.title$.pipe(skip(1)).subscribe(title => expect(title).toBeUndefined(undefined));
      handle.title$.next(undefined);
      subscription.unsubscribe();
    });
  });

  describe('page$ property test', () => {
    it('should emit all the page values emitted from handle', function() {
      const handle = new FakeReviewableBookSourceHandle();
      const model = new ViewableBookSourceModelFactory().createSource(handle);
      let subscription = model.page$.pipe().subscribe(value => expect(value).toEqual(''));
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

  describe('publishPlace$ property test', () => {
    it('should emit all the publishPlace$ values emitted from handle', function() {
      const handle = new FakeReviewableBookSourceHandle();
      const model = new ViewableBookSourceModelFactory().createSource(handle);
      let subscription = model.publishPlace$.pipe().subscribe(value => expect(value).toEqual(''));
      subscription.unsubscribe();
      subscription = model.publishPlace$.pipe(skip(1)).subscribe(value => expect(value).toEqual(''));
      handle.publishPlace$.next('');
      subscription.unsubscribe();
      subscription = model.publishPlace$.pipe(skip(1)).subscribe(value => expect(value).toEqual('sherwood'));
      handle.publishPlace$.next('sherwood');
      subscription.unsubscribe();
      subscription = model.publishPlace$.pipe(skip(1)).subscribe(value => expect(value).toBeNull());
      handle.publishPlace$.next(null);
      subscription.unsubscribe();
      subscription = model.publishPlace$.pipe(skip(1)).subscribe(value => expect(value).toBeUndefined(undefined));
      handle.publishPlace$.next(undefined);
      subscription.unsubscribe();
    });
  });

  describe('publishYear$ property test', () => {
    it('should emit all the publishYear$ values emitted from handle', function() {
      const handle = new FakeReviewableBookSourceHandle();
      const model = new ViewableBookSourceModelFactory().createSource(handle);
      let subscription = model.publishYear$.pipe().subscribe(value => expect(value).toEqual(''));
      subscription.unsubscribe();
      subscription = model.publishYear$.pipe(skip(1)).subscribe(value => expect(value).toEqual(''));
      handle.publishYear$.next('');
      subscription.unsubscribe();
      subscription = model.publishYear$.pipe(skip(1)).subscribe(value => expect(value).toEqual('sherwood'));
      handle.publishYear$.next('sherwood');
      subscription.unsubscribe();
      subscription = model.publishYear$.pipe(skip(1)).subscribe(value => expect(value).toBeNull());
      handle.publishYear$.next(null);
      subscription.unsubscribe();
      subscription = model.publishYear$.pipe(skip(1)).subscribe(value => expect(value).toBeUndefined(undefined));
      handle.publishYear$.next(undefined);
      subscription.unsubscribe();
    });
  });

  describe('initialPublishYear$ property test', () => {
    it('should emit all the initialPublishYear$ values emitted from handle', function() {
      const handle = new FakeReviewableBookSourceHandle();
      const model = new ViewableBookSourceModelFactory().createSource(handle);
      let subscription = model.initialPublishYear$.pipe().subscribe(value => expect(value).toEqual(''));
      subscription.unsubscribe();
      subscription = model.initialPublishYear$.pipe(skip(1)).subscribe(value => expect(value).toEqual(''));
      handle.initialPublishYear$.next('');
      subscription.unsubscribe();
      subscription = model.initialPublishYear$.pipe(skip(1)).subscribe(value => expect(value).toEqual('sherwood'));
      handle.initialPublishYear$.next('sherwood');
      subscription.unsubscribe();
      subscription = model.initialPublishYear$.pipe(skip(1)).subscribe(value => expect(value).toBeNull());
      handle.initialPublishYear$.next(null);
      subscription.unsubscribe();
      subscription = model.initialPublishYear$.pipe(skip(1)).subscribe(value => expect(value).toBeUndefined(undefined));
      handle.initialPublishYear$.next(undefined);
      subscription.unsubscribe();
    });
  });

});
