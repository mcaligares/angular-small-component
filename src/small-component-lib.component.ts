import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-small-component',
  templateUrl: 'small-component-lib.html',
  encapsulation: ViewEncapsulation.None
})
export class SmallComponentLibComponent {
  items = new Array(20);
}
