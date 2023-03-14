import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCopyComponent } from './pages/add-copy/add-copy.component';

const routes: Routes = [{
  path: '',
  component: AddCopyComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCopyRoutingModule { }
