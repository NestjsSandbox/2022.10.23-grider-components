import { Component, OnInit } from '@angular/core';
import { AccordionInterface } from '../mods.module';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  isModalOpen: boolean = false;
  accordionItems: AccordionInterface[] = [
    {title: '(1) What kinds of dogs are there?', content: 'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.'},
    {title: '(2) What kinds of dogs are there?', content: 'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.'},
    {title: '(3) How do you acquire a dog?', content: 'A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
   this.isModalOpen = !this.isModalOpen;
  }


}
