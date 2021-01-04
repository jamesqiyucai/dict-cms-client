import {ExampleProposalTranslationModel} from './example-proposal-translation-model';
import {ExampleProposalTranslationHandle} from 'service-example-proposal-translation';

export interface ExampleProposalTranslationModelFactory {
  getExampleProposalTranslationModel(handle: ExampleProposalTranslationHandle): ExampleProposalTranslationModel;
}
