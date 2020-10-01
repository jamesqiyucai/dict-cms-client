import {FakeReviewableBookSourceHandle} from './viewable-book-source-model-impl.spec';
import {EditableBookSourceHandle, SourceType} from 'service-source';
import {EditableBookSourceModelFactory} from './editable-book-source-model-factory';
import {EditableBookSourceModelImpl} from './editable-book-source-model-impl';

export class FakeEditableBookSourceHandle extends FakeReviewableBookSourceHandle implements EditableBookSourceHandle {
  editable = true;
  setAuthor(newAuthor: string): void {
    this.author$.next(newAuthor);
  }

  setInitialPublishYear(newYear: string): void {
    this.initialPublishYear$.next(newYear);
  }

  setPage(newPage: string): void {
    this.page$.next(newPage);
  }

  setPublishPlace(newPlace: string): void {
    this.publishPlace$.next(newPlace);
  }

  setPublishYear(newYear: string): void {
    this.publishYear$.next(newYear);
  }

  setTitle(newTitle: string): void {
    this.title$.next(newTitle);
  }

}

describe('EditableBookSourceModelImpl tests', () => {

  describe('initialization logic tests including its factory', () => {
    it('should not initialize if given a handle with wrong type', function() {
      const handle = new FakeEditableBookSourceHandle();
      handle.type = SourceType.Journal;
      const model = new EditableBookSourceModelFactory().createSource(handle);
      expect(model).toBeNull();
    });
    it('should not initialize if given a handle with wrong editable', function() {
      const handle = new FakeEditableBookSourceHandle();
      handle.type = SourceType.Book;
      handle.editable = false;
      const model = new EditableBookSourceModelFactory().createSource(handle);
      expect(model).toBeNull();
    });
    it('should initialize given the right type and editable', function() {
      const handle = new FakeEditableBookSourceHandle();
      const model = new EditableBookSourceModelFactory().createSource(handle);
      expect(model).toBeInstanceOf(EditableBookSourceModelImpl);
    });
  });

  describe('set author test', () => {
    const handle = new FakeEditableBookSourceHandle();
    const model = new EditableBookSourceModelFactory().createSource(handle);

    it('should emit empty string if user input is empty', function() {
      handle.setAuthor('sherwood');
      model.setAuthor('');
      const subscription = model.author$.subscribe(value => expect(value).toEqual(''));
      subscription.unsubscribe();
    });
    it('should emit the input value if it is not empty', function() {
      handle.setAuthor('james');
      model.setAuthor('sherwood');
      const subscription = model.author$.subscribe(value => expect(value).toEqual('sherwood'));
      subscription.unsubscribe();
    });
  });

  describe('set title test', () => {
    const handle = new FakeEditableBookSourceHandle();
    const model = new EditableBookSourceModelFactory().createSource(handle);

    it('should emit empty string if user input is empty', function() {
      handle.setTitle('sherwood');
      model.setTitle('');
      const subscription = model.title$.subscribe(value => expect(value).toEqual(''));
      subscription.unsubscribe();
    });
    it('should emit the input value if it is not empty', function() {
      handle.setTitle('james');
      model.setTitle('sherwood');
      const subscription = model.title$.subscribe(value => expect(value).toEqual('sherwood'));
      subscription.unsubscribe();
    });
  });

  describe('set page test', () => {
    const handle = new FakeEditableBookSourceHandle();
    const model = new EditableBookSourceModelFactory().createSource(handle);

    it('should emit empty string if user input is empty', function() {
      handle.setPage('sherwood');
      model.setPage('');
      const subscription = model.page$.subscribe(value => expect(value).toEqual(''));
      subscription.unsubscribe();
    });
    it('should emit the input value if it is not empty', function() {
      handle.setPage('james');
      model.setPage('sherwood');
      const subscription = model.page$.subscribe(value => expect(value).toEqual('sherwood'));
      subscription.unsubscribe();
    });
  });

  describe('set publish place test', () => {
    const handle = new FakeEditableBookSourceHandle();
    const model = new EditableBookSourceModelFactory().createSource(handle);

    it('should emit empty string if user input is empty', function() {
      handle.setPublishPlace('sherwood');
      model.setPublishPlace('');
      const subscription = model.publishPlace$.subscribe(value => expect(value).toEqual(''));
      subscription.unsubscribe();
    });
    it('should emit the input value if it is not empty', function() {
      handle.setPublishPlace('james');
      model.setPublishPlace('sherwood');
      const subscription = model.publishPlace$.subscribe(value => expect(value).toEqual('sherwood'));
      subscription.unsubscribe();
    });
  });

  describe('set initial publish year test', () => {
    const handle = new FakeEditableBookSourceHandle();
    const model = new EditableBookSourceModelFactory().createSource(handle);

    it('should emit empty string if user input is empty', function() {
      handle.setInitialPublishYear('sherwood');
      model.setInitialPublishYear('');
      const subscription = model.initialPublishYear$.subscribe(value => expect(value).toEqual(''));
      subscription.unsubscribe();
    });
    it('should emit the input value if it is not empty', function() {
      handle.setInitialPublishYear('james');
      model.setInitialPublishYear('sherwood');
      const subscription = model.initialPublishYear$.subscribe(value => expect(value).toEqual('sherwood'));
      subscription.unsubscribe();
    });
    it('should emit input value if user input is later than current year', function() {
      handle.setInitialPublishYear('2002');
      model.setInitialPublishYear('3030');
      const subscription = model.initialPublishYear$.subscribe(value => expect(value).toEqual('3030'));
      subscription.unsubscribe();
    });
    it('should emit handle value if user input is earlier than current year', function() {
      model.setInitialPublishYear('1999');
      const subscription = model.initialPublishYear$.subscribe(value => expect(value).toEqual('1999'));
      subscription.unsubscribe();
    });
  });

  describe('set publish year test', () => {
    const handle = new FakeEditableBookSourceHandle();
    const model = new EditableBookSourceModelFactory().createSource(handle);

    it('should emit empty string if user input is empty', function() {
      handle.setPublishYear('sherwood');
      model.setPublishYear('');
      const subscription = model.publishYear$.subscribe(value => expect(value).toEqual(''));
      subscription.unsubscribe();
    });
    it('should emit the input value if it is not empty', function() {
      handle.setPublishYear('james');
      model.setPublishYear('sherwood');
      const subscription = model.publishYear$.subscribe(value => expect(value).toEqual('sherwood'));
      subscription.unsubscribe();
    });
    it('should emit input value if user input is later than current year', function() {
      handle.setPublishYear('2002');
      model.setPublishYear('3030');
      const subscription = model.publishYear$.subscribe(value => expect(value).toEqual('3030'));
      subscription.unsubscribe();
    });
    it('should emit handle value if user input is earlier than current year', function() {
      model.setPublishYear('1999');
      const subscription = model.publishYear$.subscribe(value => expect(value).toEqual('1999'));
      subscription.unsubscribe();
    });
  });

  describe('author empty test', () => {
    const handle = new FakeEditableBookSourceHandle();
    it('should emit true if author is empty', function() {
      const model = new EditableBookSourceModelFactory().createSource(handle);
      model.setAuthor('');
      model.authorEmpty.subscribe(value => expect(value).toEqual(true)).unsubscribe();
    });
    it('should emit false if author is not empty', function() {
      const model2 = new EditableBookSourceModelFactory().createSource(handle);
      model2.setAuthor('sherwood');
      model2.authorEmpty.subscribe(value => expect(value).toEqual(false)).unsubscribe();
    });
  });

  describe('title empty test', () => {
    const handle = new FakeEditableBookSourceHandle();
    it('should emit true if title is empty', function() {
      const model = new EditableBookSourceModelFactory().createSource(handle);
      model.setTitle('');
      model.titleEmpty.subscribe(value => expect(value).toEqual(true)).unsubscribe();
    });
    it('should emit false if title is not empty', function() {
      const model2 = new EditableBookSourceModelFactory().createSource(handle);
      model2.setTitle('sherwood');
      model2.titleEmpty.subscribe(value => expect(value).toEqual(false)).unsubscribe();
    });
  });

  describe('page empty test', () => {
    const handle = new FakeEditableBookSourceHandle();
    it('should emit true if page is empty', function() {
      const model = new EditableBookSourceModelFactory().createSource(handle);
      model.setPage('');
      model.pageEmpty.subscribe(value => expect(value).toEqual(true)).unsubscribe();
    });
    it('should emit false if page is not empty', function() {
      const model2 = new EditableBookSourceModelFactory().createSource(handle);
      model2.setPage('sherwood');
      model2.pageEmpty.subscribe(value => expect(value).toEqual(false)).unsubscribe();
    });
  });

  describe('initial publish year empty test', () => {
    const handle = new FakeEditableBookSourceHandle();
    it('should emit true if initial publish year is empty', function() {
      const model = new EditableBookSourceModelFactory().createSource(handle);
      model.setInitialPublishYear('');
      model.initialPublishYearEmpty.subscribe(value => expect(value).toEqual(true)).unsubscribe();
    });
    it('should emit false if initial publish year is not empty', function() {
      const model2 = new EditableBookSourceModelFactory().createSource(handle);
      model2.setInitialPublishYear('sherwood');
      model2.initialPublishYearEmpty.subscribe(value => expect(value).toEqual(false)).unsubscribe();
    });
  });

  describe('publish place empty test', () => {
    const handle = new FakeEditableBookSourceHandle();
    it('should emit true if publish place is empty', function() {
      const model = new EditableBookSourceModelFactory().createSource(handle);
      model.setPublishPlace('');
      model.publishPlaceEmpty.subscribe(value => expect(value).toEqual(true)).unsubscribe();
    });
    it('should emit false if publish place is not empty', function() {
      const model2 = new EditableBookSourceModelFactory().createSource(handle);
      model2.setPublishPlace('sherwood');
      model2.publishPlaceEmpty.subscribe(value => expect(value).toEqual(false)).unsubscribe();
    });
  });

  describe('publish year empty test', () => {
    const handle = new FakeEditableBookSourceHandle();
    it('should emit true if publish year is empty', function() {
      const model = new EditableBookSourceModelFactory().createSource(handle);
      model.setPublishYear('');
      model.publishYearEmpty.subscribe(value => expect(value).toEqual(true)).unsubscribe();
    });
    it('should emit false if publish year is not empty', function() {
      const model2 = new EditableBookSourceModelFactory().createSource(handle);
      model2.setPublishYear('sherwood');
      model2.publishYearEmpty.subscribe(value => expect(value).toEqual(false)).unsubscribe();
    });
  });

  describe('initial publish year in future test', () => {
    const handle = new FakeEditableBookSourceHandle();
    it('should emit true if initial publish year is in future', function() {
      const model = new EditableBookSourceModelFactory().createSource(handle);
      model.setInitialPublishYear('3000');
      model.initialPublishYearInFuture.subscribe(value => expect(value).toEqual(true)).unsubscribe();
    });
    it('should emit false if initial publish year is not in future', function() {
      const model2 = new EditableBookSourceModelFactory().createSource(handle);
      model2.setInitialPublishYear('2000');
      model2.initialPublishYearInFuture.subscribe(value => expect(value).toEqual(false)).unsubscribe();
    });
  });

  describe('publish year in future test', () => {
    const handle = new FakeEditableBookSourceHandle();
    it('should emit true if publish year is in future', function() {
      const model = new EditableBookSourceModelFactory().createSource(handle);
      model.setPublishYear('3000');
      model.publishYearInFuture.subscribe(value => expect(value).toEqual(true)).unsubscribe();
    });
    it('should emit false if publish year is not in future', function() {
      const model2 = new EditableBookSourceModelFactory().createSource(handle);
      model2.setPublishYear('2000');
      model2.publishYearInFuture.subscribe(value => expect(value).toEqual(false)).unsubscribe();
    });
  });

  describe('validation not pass test', () => {
    const handle = new FakeEditableBookSourceHandle();
    const model = new EditableBookSourceModelFactory().createSource(handle);

    const combination = [0, 0, 0, 0, 0, 0, 0, 0];

    const authorCircumstances = ['', 'author'];
    const authorEmptyResults = new Map();
    authorEmptyResults.set('', true);
    authorEmptyResults.set('author', false);

    const titleCircumstances = ['', 'title'];
    const titleEmptyResults = new Map();
    titleEmptyResults.set('', true);
    titleEmptyResults.set('title', false);

    const pageCircumstances = ['', '123'];
    const pageEmptyResults = new Map();
    pageEmptyResults.set('', true);
    pageEmptyResults.set('123', false);

    const initialPublishYearCircumstances = ['', '0001', '2030'];
    const initialPublishYearEmptyResults = new Map();
    initialPublishYearEmptyResults.set('', true);
    initialPublishYearEmptyResults.set('0001', false);
    initialPublishYearEmptyResults.set('2030', false);
    const initialPublishYearInFutureResults = new Map();
    initialPublishYearInFutureResults.set('', false);
    initialPublishYearInFutureResults.set('0001', false);
    initialPublishYearInFutureResults.set('2030', true);

    const publishYearCircumstances = ['', '1999', '3000'];
    const publishYearEmptyResults = new Map();
    publishYearEmptyResults.set('', true);
    publishYearEmptyResults.set('1999', false);
    publishYearEmptyResults.set('3000', false);
    const publishYearInFutureResults = new Map();
    publishYearInFutureResults.set('', false);
    publishYearInFutureResults.set('1999', false);
    publishYearInFutureResults.set('3000', true);

    const publishPlaceCircumstances = ['', 'hong kong'];
    const publishPlaceEmptyResults = new Map();
    publishPlaceEmptyResults.set('', true);
    publishPlaceEmptyResults.set('hong kong', false);

    it('should only emit false when all validations have passed', function() {
      for (let i = 0; ; i++) {
        const author = authorCircumstances[combination[0]];
        const title = titleCircumstances[combination[1]];
        const page = pageCircumstances[combination[2]];
        const initialPublishYear = initialPublishYearCircumstances[combination[3]];
        const publishYear = publishYearCircumstances[combination[4]];
        const publishPlace = publishPlaceCircumstances[combination[5]];
        handle.setAuthor(author);
        handle.setTitle(title);
        handle.setPage(page);
        handle.setInitialPublishYear(initialPublishYear);
        handle.setPublishYear(publishYear);
        handle.setPublishPlace(publishPlace);
        model.validationNotPass.subscribe(value => {
          const expectedResult =
            authorEmptyResults.get(author) ||
            titleEmptyResults.get(title) ||
            pageEmptyResults.get(page) ||
            initialPublishYearEmptyResults.get(initialPublishYear) ||
            initialPublishYearInFutureResults.get(initialPublishYear) ||
            publishYearEmptyResults.get(publishYear) ||
            publishYearInFutureResults.get(publishYear) ||
            publishPlaceEmptyResults.get(publishPlace);
          expect(value).toEqual(expectedResult);
        }).unsubscribe();
        if (combination[0] < 1) {
          combination[0] += 1;
        } else {
          combination[0] = 0;
          if (combination[1] < 1) {
            combination[1] += 1;
          } else {
            combination[1] = 0;
            if (combination[2] < 1) {
              combination[2] += 1;
            } else {
              combination[2] = 0;
              if (combination[3] < 2) {
                combination[3] += 1;
              } else {
                combination[3] = 0;
                if (combination[4] < 2) {
                  combination[4] += 1;
                } else {
                  combination[4] = 0;
                  if (combination[5] < 1) {
                    combination[5] += 1;
                  } else {
                    break;
                  }
                }
              }
            }
          }
        }
      }
    });
  });
});

