import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'add',
    loadChildren: () =>
      import('./add-copy/add-copy.module').then((m) => m.AddCopyModule),
  },
  {
    path: 'sold-by',
    loadChildren: () =>
      import('./ecommerce/ecommerce.module').then((m) => m.EcommerceModule),
  },
  {
    path: 'request',
    loadChildren: () =>
      import('./request-book/request-book.module').then((m) => m.RequestBookModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
