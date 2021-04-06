import {ListExampleProposalTranslationDataModel} from './list-example-proposal-translation-data-model';
import {ExampleProposalTranslationModelFactory} from 'ui-model-example-proposal-translation';
import {ListManipulatorModel} from 'ui-directive-list-manipulator';

export interface ListExampleProposalTranslationModelFactory {
  getListExampleProposalTranslationModel(handle: ListExampleProposalTranslationDataModel, translationModelFactory: ExampleProposalTranslationModelFactory): ListManipulatorModel;
}
