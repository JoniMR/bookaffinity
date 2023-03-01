import { MaterialModule } from 'src/app/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { BookRequestsComponent } from './components/book-requests/book-requests.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PaginatorComponent } from './components/paginator/paginator.component';


@NgModule({
  declarations: [
    AdminComponent,
    BookRequestsComponent,
    UserManagementComponent,
    SearchBarComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],exports:[
    AdminComponent,
    BookRequestsComponent,
    UserManagementComponent,
  ]
})
export class AdminModule { }
