import {ListExampleProposalTranslationModelFactory, ListExampleProposalTranslationDataModel} from 'ui-model-list-example-proposal-translation';
import {ExampleProposalTranslationModelFactory} from 'ui-model-example-proposal-translation';
import {ListManipulatorModel} from 'ui-directive-list-manipulator';
import {ListExampleProposalTranslationModelImpl} from './list-example-proposal-translation-model-impl';

export class ListExampleProposalTranslationModelDefaultFactory implements ListExampleProposalTranslationModelFactory {
  getListExampleProposalTranslationModel(handle: ListExampleProposalTranslationDataModel, translationModelFactory: ExampleProposalTranslationModelFactory): ListManipulatorModel {
    return new ListExampleProposalTranslationModelImpl(handle, translationModelFactory);
  }
}
