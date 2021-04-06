import {ExampleTranslationModel} from 'ui-component-example-translation';
import {ExampleTranslationDataModel} from './example-translation-data-model';

export interface ExampleTranslationModelFactory {
  getExampleTranslationModel(handle: ExampleTranslationDataModel): ExampleTranslationModel;
}
