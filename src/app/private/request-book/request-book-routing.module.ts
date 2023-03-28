import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestBookComponent } from './pages/request-book/request-book.component';
const routes: Routes = [{
  path: '',
  component: RequestBookComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestBookRoutingModule { }
