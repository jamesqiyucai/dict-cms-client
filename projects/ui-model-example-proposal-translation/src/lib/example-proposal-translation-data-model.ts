import {ExampleTranslationDataModel} from 'ui-model-example-translation';

export interface ExampleProposalTranslationDataModel extends ExampleTranslationDataModel {
  text: string;
  setText(newText: string): void;
}
