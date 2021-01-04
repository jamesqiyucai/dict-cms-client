import {ExampleProposalTranslationModelFactory} from './example-proposal-translation-model-factory';
import {ExampleProposalTranslationModel} from './example-proposal-translation-model';
import {ExampleProposalTranslationModelImpl} from './eample-proposal-translation-model-impl';
import {ExampleProposalTranslationHandle} from 'service-example-proposal-translation';

export class ExmapleProposalTranslationModelFactoryImpl implements ExampleProposalTranslationModelFactory {
  getExampleProposalTranslationModel(handle: ExampleProposalTranslationHandle): ExampleProposalTranslationModel {
    return new ExampleProposalTranslationModelImpl(handle);
  }
}
