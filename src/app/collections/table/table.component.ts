import { Component, Input, OnInit } from '@angular/core';
import { MyData, MyHeaders } from '../collections.module';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

 @Input('class') classNames: string = '';

  @Input() data: MyData[] = [];
  @Input() headers:MyHeaders[] = [] ;
  
  constructor() { }

  ngOnInit(): void {
  }

}
