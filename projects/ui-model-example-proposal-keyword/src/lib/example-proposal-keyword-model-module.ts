import {ExampleProposalKeywordModelFactoryImpl} from './example-proposal-keyword-model-factory-impl';
import {ExampleProposalKeywordModelFactory} from './example-proposal-keyword-model-factory';
import {NgModule, InjectionToken} from '@angular/core';

export const EXAMPLE_PROPOSAL_KEYWORD_MODEL_FACTORY = new InjectionToken<ExampleProposalKeywordModelFactory>('Example Proposal Keyword Model Factory');

@NgModule({
  providers: [
    {provide: EXAMPLE_PROPOSAL_KEYWORD_MODEL_FACTORY, useClass: ExampleProposalKeywordModelFactoryImpl}
  ]
})
export class ExampleProposalKeywordModelModule {}
