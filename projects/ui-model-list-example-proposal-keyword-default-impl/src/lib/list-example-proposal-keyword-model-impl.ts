import {ListExampleProposalKeywordDataModel} from 'ui-model-list-example-proposal-keyword';
import {ExampleProposalKeywordModelFactory} from 'ui-model-example-proposal-keyword';
import {ExampleProposalKeywordModel} from 'ui-component-example-proposal-keyword';
import {ListManipulatorModel} from 'ui-directive-list-manipulator';
import {Observable} from 'rxjs';
import {List} from 'immutable';
import {map} from 'rxjs/operators';
import {makeEditable} from 'ui-model-editable';

export class ListExampleProposalKeywordModelImplBase {
  constructor(private handle: ListExampleProposalKeywordDataModel, private keywordFactory: ExampleProposalKeywordModelFactory) {}
  public addElement(): void {
    this.handle.addKeyword();
  }
  public moveElement(from: number, to: number): void {
    this.handle.moveKeyword(from, to);
  }
  public deleteElement(index: number) {
    this.handle.removeKeyword(index);
  }
  public get models(): Observable<List<ExampleProposalKeywordModel>> {
    return this.handle.keywords.pipe(
      map(listOfDataModel => listOfDataModel.map(dataModel => this.keywordFactory.getExampleProposalKeywordModel(dataModel)))
    );
  }
}

export const ListExampleProposalKeywordModelImpl: (new (...args: any[]) => ListManipulatorModel) = makeEditable(ListExampleProposalKeywordModelImplBase);
