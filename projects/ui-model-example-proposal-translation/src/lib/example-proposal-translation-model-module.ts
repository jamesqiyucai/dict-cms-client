import {ExampleProposalTranslationModelFactoryImpl} from './example-proposal-translation-model-factory-impl';
import {ExampleProposalTranslationModel} from './example-proposal-translation-model';
import {NgModule, InjectionToken} from '@angular/core';

export const EXAMPLE_PROPOSAL_TRANSLATION_MODEL_FACTORY = new InjectionToken<ExampleProposalTranslationModel>('Example Proposal Translation Factory');

@NgModule({
  providers: [
    {provide: EXAMPLE_PROPOSAL_TRANSLATION_MODEL_FACTORY, useClass: ExampleProposalTranslationModelFactoryImpl}
  ]
})
export class ExampleProposalTranslationModelModule {}
