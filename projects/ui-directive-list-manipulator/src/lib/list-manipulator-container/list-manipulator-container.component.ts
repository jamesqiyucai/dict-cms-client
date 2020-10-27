import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lib-list-manipulator-container',
  templateUrl: './list-manipulator-container.component.html',
  styleUrls: ['./list-manipulator-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListManipulatorContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
