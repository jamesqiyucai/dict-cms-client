import {ExampleTranslationModelFactoryImpl} from './example-translation-model-factory-impl';
import {NgModule, InjectionToken} from '@angular/core';
import {ExampleTranslationModelFactory} from 'projects/ui-model-example-translation/src/lib/example-translation-model-factory';

export const EXAMPLE_TRANSLATION_MODEL_FACTORY = new InjectionToken<ExampleTranslationModelFactory>('Example Translation Model Factory');

@NgModule({
  providers: [
    {provide : EXAMPLE_TRANSLATION_MODEL_FACTORY, useClass: ExampleTranslationModelFactoryImpl}
  ]
})
export class ExampleTranslationModelModule {}
