import { Component, Input, OnInit } from '@angular/core';
import { MyData, MyHeaders } from '../collections.module';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  @Input() data:(MyData )[] = [
    {name: 'James', age: 30, job:'Designer' },
    {name: 'Jill', age: 28, job:'Engineer' },
    {name: 'Bob', age: 32, job:'Cook' },
  ];
  
  @Input() headers:MyHeaders []  = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'},
  ];

  constructor() { 
 
  }

  ngOnInit(): void {
  }

}
