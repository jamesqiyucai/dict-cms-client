import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ExampleProposalSourceBookModel} from './example-proposal-source-book-model';

@Component({
  selector: 'lib-ui-component-example-proposal-source-book',
  templateUrl: `./example-proposal-source-book-component.html`,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleProposalSourceBookComponent {
  @Input() public model: ExampleProposalSourceBookModel;
  constructor() { }
}
