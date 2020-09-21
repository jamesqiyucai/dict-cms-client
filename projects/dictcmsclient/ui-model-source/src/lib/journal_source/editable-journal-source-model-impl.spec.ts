import {FakeReviewableJournalSourceHandle} from "./viewable-journal-source-model-impl.spec";
import {EditableJournalSourceHandle, SourceType} from "@dictcmsclient/service-source";
import {EditableJournalSourceModelFactory} from "./editable-journal-source-model-factory";
import {EditableJournalSourceModelImpl} from "./editable-journal-source-model.impl";
import {EditableJournalSourceModel} from './editable-journal-source-model';

export class FakeEditableJournalSourceHandle extends FakeReviewableJournalSourceHandle implements EditableJournalSourceHandle {
  editable = true;
  setAuthor(newAuthor: string): void {
    this.author$.next(newAuthor);
  }

  setJournalTitle(newTitle: string): void {
    this.journalTitle$.next(newTitle);
  }

  setPage(newPage: string): void {
    this.page$.next(newPage);
  }

  setPassageTitle(newTitle: string): void {
    this.passageTitle$.next(newTitle);
  }

  setPublishDate(newDate: string): void {
    this.publishingDate$.next(newDate);
  }
}

describe('EditableJournalSourceModelImpl tests', () => {

  describe('initialization logic tests including its factory', () => {
    it('should not initialize if given a handle with wrong type', function() {
      const handle = new FakeEditableJournalSourceHandle();
      handle.type = SourceType.Book;
      const model = new EditableJournalSourceModelFactory().createSource(handle);
      expect(model).toBeNull();
    });
    it('should not initialize if given a handle with wrong editable', function() {
      const handle = new FakeEditableJournalSourceHandle();
      handle.type = SourceType.Journal;
      handle.editable = false;
      const model = new EditableJournalSourceModelFactory().createSource(handle);
      expect(model).toBeNull();
    });
    it('should initialize given the right type and editable', function() {
      const handle = new FakeEditableJournalSourceHandle();
      const model = new EditableJournalSourceModelFactory().createSource(handle);
      expect(model).toBeInstanceOf(EditableJournalSourceModelImpl);
    });
  });

  describe('set author test', () => {
    const handle = new FakeEditableJournalSourceHandle();
    const model = new EditableJournalSourceModelFactory().createSource(handle);
    it('should emit whatever value that is being set', function() {
      handle.setAuthor('whatever');
      model.setAuthor('');
      const subscription1 = model.author$.subscribe(value => expect(value).toEqual(''));
      subscription1.unsubscribe();
      model.setAuthor('something');
      const subscription2 = model.author$.subscribe(value => expect(value).toEqual('something'));
      subscription2.unsubscribe();
    });
  });

  describe('set journal title test', () => {
    const handle = new FakeEditableJournalSourceHandle();
    const model = new EditableJournalSourceModelFactory().createSource(handle);
    it('should emit whatever value that is being set', function() {
      handle.setJournalTitle('whatever');
      model.setJournalTitle('');
      model.journalTitle$.subscribe(value => expect(value).toEqual('')).unsubscribe();
      model.setJournalTitle('something');
      model.journalTitle$.subscribe(value => expect(value).toEqual('something')).unsubscribe();
    });
  });

  describe('set page test', () => {
    const handle = new FakeEditableJournalSourceHandle();
    const model = new EditableJournalSourceModelFactory().createSource(handle);
    it('should emit whatever value that is being set', function() {
      handle.setPage('123');
      model.setPage('');
      model.page$.subscribe(value => expect(value).toEqual('')).unsubscribe();
      model.setPage('34444');
      model.page$.subscribe(value => expect(value).toEqual('34444')).unsubscribe();
    });
  });

  describe('set passage title test', () => {
    const handle = new FakeEditableJournalSourceHandle();
    const model = new EditableJournalSourceModelFactory().createSource(handle);
    it('should emit whatever value that is being set', function() {
      handle.setPassageTitle('whatever');
      model.setPassageTitle('');
      model.passageTitle$.subscribe(value => expect(value).toEqual('')).unsubscribe();
      model.setPassageTitle('title');
      model.passageTitle$.subscribe(value => expect(value).toEqual('title')).unsubscribe();
    });
  });

  describe('set publish date test', () => {
    const handle = new FakeEditableJournalSourceHandle();
    const model = new EditableJournalSourceModelFactory().createSource(handle);
    it('should emit whatever value that is being set', function() {
      handle.setPublishDate('whatever');
      model.setPublishDate('');
      model.publishDate$.subscribe(value => expect(value).toEqual('')).unsubscribe();
      model.setPublishDate('2020-03-13');
      model.publishDate$.subscribe(value => expect(value).toEqual('2020-03-13')).unsubscribe();
    });
  });

  describe('validation tests', () => {
    let handle: EditableJournalSourceHandle;
    let model: EditableJournalSourceModel;
    beforeEach(() => {
      handle = new FakeEditableJournalSourceHandle();
      model = new EditableJournalSourceModelFactory().createSource(handle);
    });
    describe('author empty tests', () => {
      it('should emit true if author is empty', function() {
        model.setAuthor('');
        model.authorEmpty.subscribe(value => expect(value).toEqual(true)).unsubscribe();
      });
      it('should emit false if author is not empty', function() {
        model.setAuthor('sherwood');
        model.authorEmpty.subscribe(value => expect(value).toEqual(false)).unsubscribe();
      });
    });
    describe('journal title empty tests', () => {
      it('should emit true if journal title is empty', function() {
        model.setJournalTitle('');
        model.journalTitleEmpty.subscribe(value => expect(value).toEqual(true)).unsubscribe();
      });
      it('should emit false if journal title is not empty', function() {
        model.setJournalTitle('title');
        model.journalTitleEmpty.subscribe(value => expect(value).toEqual(false)).unsubscribe();
      });
    });
    describe('page empty tests', () => {
      it('should emit true if page is empty', function () {
        model.setPage('');
        model.pageEmpty.subscribe(value => expect(value).toEqual(true)).unsubscribe();
      });
      it('should should emit false if page is not empty', function () {
        model.setPage('333');
        model.pageEmpty.subscribe(value => expect(value).toEqual(false)).unsubscribe();
      });
    });
    describe('passage title empty test', () => {
      it('should emit true if passage title is empty', function () {
        model.setPassageTitle('');
        model.passageTitleEmpty.subscribe(value => expect(value).toEqual(true)).unsubscribe();
      });
      it('should emit false if passage title is not empty', function () {
        model.setPassageTitle('some title');
        model.passageTitleEmpty.subscribe(value => expect(value).toEqual(false)).unsubscribe();
      });
    });
    describe('publish date empty test', () => {
      it('should emit true if publish date is empty', function () {
        model.setPublishDate('');
        model.publishDateEmpty.subscribe(value => expect(value).toEqual(true)).unsubscribe();
      });
      it('should emit false if publish date is not empty', function () {
        model.setPublishDate('3030-2-3');
        model.publishDateEmpty.subscribe(value => expect(value).toEqual(false)).unsubscribe();
      });
    });
    describe('publish date in future test', () => {
      it('should emit true if publish date is in future', function () {
        model.setPublishDate('3000-01-01');
        model.publishDateInFuture.subscribe(value => expect(value).toEqual(true)).unsubscribe();
      });
      it('should should emit false if publish date is not in future', function () {
        model.setPublishDate('1989-6-4');
        model.publishDateInFuture.subscribe(value => expect(value).toEqual(false)).unsubscribe();
      });
    });
    describe('validation not pass test', () => {
      const combination = [0, 0, 0, 0, 0];

      const authorCircumstances = ['', 'author'];
      const authorEmptyResults = new Map();
      authorEmptyResults.set('', true);
      authorEmptyResults.set('author', false);

      const journalTitleCircumstances = ['', 'journal title'];
      const journalTitleEmptyResults = new Map();
      journalTitleEmptyResults.set('', true);
      journalTitleEmptyResults.set('journal title', false);

      const pageCircumstances = ['', '334455'];
      const pageEmptyResults = new Map();
      pageEmptyResults.set('', true);
      pageEmptyResults.set('334455', false);

      const passageTitleCircumstances = ['', 'passage title'];
      const passageTitleEmptyResults = new Map();
      passageTitleEmptyResults.set('', true);
      passageTitleEmptyResults.set('passage title', false);

      const publishDateCircumstances = ['', '1989-6-4', '2090-1-1'];
      const publishDateEmptyResults = new Map();
      publishDateEmptyResults.set('', true);
      publishDateEmptyResults.set('1989-6-4', false);
      publishDateEmptyResults.set('2090-1-1', false);
      const publishDateInFutureResults = new Map();
      publishDateInFutureResults.set('', false);
      publishDateInFutureResults.set('1989-6-4', false);
      publishDateInFutureResults.set('2090-1-1', true);

      for (let i=0; ;i++) {
        const author = authorCircumstances[combination[0]];
        const journalTitle = journalTitleCircumstances[combination[1]];
        const page = pageCircumstances[combination[2]];
        const passageTitle = passageTitleCircumstances[combination[3]]
        const publishDate = publishDateCircumstances[combination[4]]
        const expectedValue =
          authorEmptyResults.get(author) ||
          journalTitleEmptyResults.get(journalTitle) ||
          pageEmptyResults.get(page) ||
          passageTitleEmptyResults.get(passageTitle) ||
          publishDateEmptyResults.get(publishDate) ||
          publishDateInFutureResults.get(publishDate);

        it('should emit true if any of the validation is not passed', function () {
          model.setAuthor(author);
          model.setJournalTitle(journalTitle);
          model.setPage(page);
          model.setPassageTitle(passageTitle);
          model.setPublishDate(publishDate);

          model.validationNotPass.subscribe(value => expect(value).toEqual(expectedValue)).unsubscribe();
        });

        if (combination[0] < 1) {
          combination[0] += 1;
        } else {
          combination[0] = 0;
          if (combination[1] < 1) {
            combination[1] +=1;
          } else {
            combination[1] = 0;
            if (combination[2] < 1) {
              combination[2] += 1;
            } else {
              combination[2] = 0;
              if (combination[3] < 1) {
                combination[3] += 1;
              } else {
                combination[3] = 0;
                if (combination[4] < 2) {
                  combination[4] += 1;
                } else {
                  break;
                }
              }
            }
          }
        }
      }

    });
  });
});
