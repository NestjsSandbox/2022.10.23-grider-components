import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyWidgetComponent } from './my-widget/my-widget.component';



@NgModule({
  declarations: [
    MyWidgetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyWidgetComponent
  ],
})
export class SharedModule { }
