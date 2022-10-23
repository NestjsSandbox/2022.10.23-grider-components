import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { TabsComponent } from './tabs/tabs.component';

export interface MyData {
  name: string;
  age: number;
  job: string;
}

export interface MyHeaders {
  key: string;
  label: string;
}

@NgModule({
  declarations: [
    CollectionsHomeComponent,
    TableComponent,
    BiographyComponent,
    CompaniesComponent,
    PartnersComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
    
  ],
  exports: [],
})
export class CollectionsModule { }
