import {ExampleTranslationModelFactory} from './example-translation-model-factory';
import {ExampleTranslationModelImpl} from './example-translation-model-impl';
import {ExampleTranslationModel} from './example-translation-model';
import {ExampleTranslationHandle} from 'service-example-translation';

export class ExampleTranslationModelFactoryImpl implements ExampleTranslationModelFactory {
  getExampleTranslationModel(handle: ExampleTranslationHandle): ExampleTranslationModel {
    return new ExampleTranslationModelImpl(handle);
  }
}
