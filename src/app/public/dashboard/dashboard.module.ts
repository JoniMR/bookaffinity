import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListComponent } from './components/list/list.component';
import { FilterComponent } from './components/filter/filter.component';
import { SearchComponent } from './components/search/search.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ListComponent,
    FilterComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
