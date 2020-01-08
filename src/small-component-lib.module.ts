import { NgModule } from '@angular/core';
import { SmallComponentLibComponent } from './small-component-lib.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SmallComponentLibComponent],
  imports: [CommonModule],
  exports: [SmallComponentLibComponent]
})
export class SmallComponentLibModule { }
