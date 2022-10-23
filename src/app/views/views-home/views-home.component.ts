import { Component, OnInit } from '@angular/core';
import { ItemListInterface, StatisticsSummary } from '../views.module';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  statsData: StatisticsSummary[] = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 80, label: 'Reviews' },
  ];

  itemsData: ItemListInterface[] = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'Can sit on it',
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'Put things in it',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
