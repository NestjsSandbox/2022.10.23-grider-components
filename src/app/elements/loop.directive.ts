import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLoop]'
})
export class LoopDirective {

  constructor(
    private viewContianerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
  ) { }

    @Input('appLoop') set render(loop: number){
      this.viewContianerRef.clear();

      for(let i=0; i<loop; i++){
        this.viewContianerRef.createEmbeddedView(this.templateRef, {});
      }
    }

}
