import {ExampleProposalTranslationModelFactory, ExampleProposalTranslationDataModel} from 'ui-model-example-proposal-translation';
import {ExampleProposalTranslationModel} from 'ui-component-example-proposal-translation';
import {ExampleProposalTranslationModelImpl} from './example-proposal-translation-model-impl';

export class ExampleProposalTranslationModelDefaultFactory implements ExampleProposalTranslationModelFactory {
  getExampleProposalTranslationModel(handle: ExampleProposalTranslationDataModel): ExampleProposalTranslationModel {
    return new ExampleProposalTranslationModelImpl(handle);
  }
}
