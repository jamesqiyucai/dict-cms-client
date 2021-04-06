import {ListManipulatorModel} from 'ui-directive-list-manipulator';
import {Observable} from 'rxjs';
import {List} from 'immutable';
import {ListExampleProposalTranslationDataModel} from 'ui-model-list-example-proposal-translation';
import {ExampleProposalTranslationModelFactory} from 'ui-model-example-proposal-translation';
import {ExampleProposalTranslationModel} from 'ui-component-example-proposal-translation';
import {map} from 'rxjs/operators';
import {makeEditable} from 'ui-model-editable';

export class ListExampleProposalTranslationModelImplBase {
  constructor(private handle: ListExampleProposalTranslationDataModel, private translationModelFactory: ExampleProposalTranslationModelFactory) {}
  public get models(): Observable<List<ExampleProposalTranslationModel>> {
    return this.handle.translations.pipe(
      map(translationDataModelList => translationDataModelList.map(translationDataModel => this.translationModelFactory.getExampleProposalTranslationModel(translationDataModel)))
    );
  }
  public addElement(): void {
    this.handle.addTranslation();
  }

  public deleteElement(index: number): void {
    this.handle.removeTranslation(index);
  }

  public moveElement(from: number, to: number): void {
    this.handle.moveTranslation(from, to);
  }
}

export const ListExampleProposalTranslationModelImpl: (new (...args: any[]) => ListManipulatorModel) = makeEditable(ListExampleProposalTranslationModelImplBase);
