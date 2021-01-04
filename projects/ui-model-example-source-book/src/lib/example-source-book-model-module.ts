import {ExampleSourceBookModelFactoryImpl} from './example-source-book-model-factory-impl';
import {ExampleSourceBookModelFactory} from './example-source-book-model-factory';
import {NgModule, InjectionToken} from '@angular/core';

export const EXAMPLE_SOURCE_BOOK_MODEL_FACTORY = new InjectionToken<ExampleSourceBookModelFactory>('Example Source Book Model Factory');

@NgModule({
  providers: [
    {provide: EXAMPLE_SOURCE_BOOK_MODEL_FACTORY, useClass: ExampleSourceBookModelFactoryImpl}
  ]
})
export class ExampleSourceBookModelModule {}
