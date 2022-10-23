import { Component, Input, OnInit } from '@angular/core';
import { StatisticsSummary } from '../views.module';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {


  @Input() statisticalInfo: StatisticsSummary[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
