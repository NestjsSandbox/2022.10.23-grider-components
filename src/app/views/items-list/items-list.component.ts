import { Component, Input, OnInit } from '@angular/core';
import { ItemListInterface } from '../views.module';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  @Input() itemsListInfo: ItemListInterface[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
