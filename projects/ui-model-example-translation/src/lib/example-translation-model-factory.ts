import {ExampleTranslationModel} from './example-translation-model';
import {ExampleTranslationHandle} from 'service-example-translation';

export interface ExampleTranslationModelFactory {
  getExampleTranslationModel(handle: ExampleTranslationHandle): ExampleTranslationModel;
}
