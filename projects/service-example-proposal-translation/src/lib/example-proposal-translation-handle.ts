import { ExampleTranslationHandle } from 'service-example-translation';

export interface ExampleProposalTranslationHandle extends ExampleTranslationHandle {
    setTranslation(newTranslation: string): void;
}
