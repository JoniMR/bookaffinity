import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { BookRequestsComponent } from './components/book-requests/book-requests.component';
import { UserManagementComponent } from './components/user-management/user-management.component';


@NgModule({
  declarations: [
    AdminComponent,
    BookRequestsComponent,
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
