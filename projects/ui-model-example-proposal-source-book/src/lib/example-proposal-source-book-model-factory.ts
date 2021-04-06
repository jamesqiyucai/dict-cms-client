import {SourceFactory} from 'ui-model-source-base';
import {ExampleProposalSourceBookDataModel} from './example-proposal-source-book-data-model';
import {ExampleProposalSourceBookModel} from 'ui-component-example-proposal-source-book';

export interface ExampleProposalSourceBookModelFactory extends SourceFactory {
  getSource(handle: ExampleProposalSourceBookDataModel): ExampleProposalSourceBookModel | null;
}
