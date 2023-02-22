import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './components/filter/filter.component';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: 'filter', component: FilterComponent},
    { path: 'list', component: ListComponent},
    { path: 'search', component: SearchComponent},
    { path: 'index', component: DashboardComponent},
    { path: '**', redirectTo: 'index'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
