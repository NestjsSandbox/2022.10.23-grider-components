import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { LoopDirective } from './loop.directive';
import { SharedModule } from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component';


@NgModule({
  declarations: [
    ElementsHomeComponent,
    PlaceHolderComponent,
    LoopDirective,
    SegmentComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ],
  exports: [],
})
export class ElementsModule { }
