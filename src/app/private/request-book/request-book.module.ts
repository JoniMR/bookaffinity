import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestBookComponent } from './pages/request-book/request-book.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RequestBookRoutingModule } from './request-book-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RequestBookComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RequestBookRoutingModule,
    SharedModule
  ],
  exports:[
    RequestBookComponent
  ]
})
export class RequestBookModule { }
