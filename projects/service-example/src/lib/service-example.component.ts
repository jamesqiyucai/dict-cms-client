import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-service-example',
  template: `
    <p>
      service-example works!
    </p>
  `,
  styles: [
  ]
})
export class ServiceExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
