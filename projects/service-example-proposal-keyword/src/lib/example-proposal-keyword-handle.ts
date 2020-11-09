import { ExampleKeywordHandle } from 'service-example-keyword';

export interface ExampleProposalKeywordHandle extends ExampleKeywordHandle {
    setKeyword(newKeyword: string): void;
}
