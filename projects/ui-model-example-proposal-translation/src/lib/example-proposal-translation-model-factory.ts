import {ExampleProposalTranslationModel} from 'ui-component-example-proposal-translation';
import {ExampleProposalTranslationDataModel} from './example-proposal-translation-data-model';

export interface ExampleProposalTranslationModelFactory {
  getExampleProposalTranslationModel(handle: ExampleProposalTranslationDataModel): ExampleProposalTranslationModel;
}
