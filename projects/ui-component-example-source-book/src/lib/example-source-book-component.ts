import {Component, Input, OnInit} from '@angular/core';
import {ExampleSourceBookModel} from './example-source-book-model';

@Component({
  selector: 'lib-ui-component-example-source-book',
  templateUrl: `./example-source-book-component.html`,
  styles: [
  ]
})
export class ExampleSourceBookComponent {
  @Input() model: ExampleSourceBookModel;
  constructor() { }
}
