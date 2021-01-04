import {ExampleKeywordModelFactoryImpl} from './example-keyword-model-factory-impl';
import {ExampleKeywordModelFactory} from './example-keyword-model-factory';
import {NgModule, InjectionToken} from '@angular/core';

export const EXAMPLE_KEYWORD_MODEL_FACTORY = new InjectionToken<ExampleKeywordModelFactory>('Example Keyword Model Factory')

@NgModule({
  providers: [
    {provide: EXAMPLE_KEYWORD_MODEL_FACTORY, useClass: ExampleKeywordModelFactoryImpl},
  ]
})
export class ExampleKeywordModelModule {}
