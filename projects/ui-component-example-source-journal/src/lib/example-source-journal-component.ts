import {Component, Input} from '@angular/core';
import {ExampleSourceJournalModel} from './example-source-journal-model';

@Component({
  selector: 'lib-ui-component-example-source-journal',
  templateUrl: `./example-source-journal-component.html`,
  styles: [
  ]
})
export class ExampleSourceJournalComponent {
  @Input() model: ExampleSourceJournalModel;
  constructor() { }
}
