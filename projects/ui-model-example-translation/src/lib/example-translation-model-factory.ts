import {ExampleTranslationModelImpl} from './example-translation-model-impl';
import {ExampleTranslationModel} from './example-translation-model';
import {ExampleTranslationHandle} from 'service-example-translation';

export class ExampleTranslationModelFactory {
  createExampleTranslationModel(handle: ExampleTranslationHandle): ExampleTranslationModel {
    return new ExampleTranslationModelImpl(handle);
  }
}
