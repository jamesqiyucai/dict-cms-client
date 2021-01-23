import {ListExampleProposalKeywordServiceHandle} from './list-example-proposal-keyword-service-handle';
import {ListExampleProposalKeywordsModel} from './list-example-proposal-keyword-model';

export class ListExampleProposalKeywordModelDefault implements ListExampleProposalKeywordsModel {
  constructor(private handle: ListExampleProposalKeywordServiceHandle) {}
  public addKeyword(): void {
    this.handle.addKeyword();
  }
  public moveKeyword(from: number, to: number): void {
    this.handle.moveKeyword(from, to);
  }
  public deleteKeyword(index: number) {
    this.handle.deleteKeyword(index);
  }
}
