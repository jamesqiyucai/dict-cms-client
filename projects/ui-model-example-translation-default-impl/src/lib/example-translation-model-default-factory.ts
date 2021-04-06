import {ExampleTranslationModelFactory, ExampleTranslationDataModel} from 'ui-model-example-translation';
import {ExampleTranslationModelImpl} from './example-translation-model-impl';
import {ExampleTranslationModel} from 'ui-component-example-translation';

export class ExampleTranslationModelDefaultFactory implements ExampleTranslationModelFactory {
  getExampleTranslationModel(handle: ExampleTranslationDataModel): ExampleTranslationModel {
    return new ExampleTranslationModelImpl(handle);
  }
}
