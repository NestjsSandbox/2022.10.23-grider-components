import { Component, Input, OnInit } from '@angular/core';
import { AccordionInterface } from '../mods.module';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() appAccordionItems: AccordionInterface[] = [];
  currentOpenedItem: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onClickAccordion(currentIndex: number){
    if (this.currentOpenedItem === currentIndex){
      this.currentOpenedItem = -1; 
      // -1 is a value that the index will never be equal to 
      // so this causes the current accordion at current index (no matter what value because it is never -1) to also collapse, just like the rest.
      //This causes all the accordion item to be collapsed.
    } else {
    this.currentOpenedItem = currentIndex;
    }
  }
}
