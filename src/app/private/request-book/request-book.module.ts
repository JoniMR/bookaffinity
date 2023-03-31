import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestBookComponent } from './pages/request-book/request-book.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RequestBookRoutingModule } from './request-book-routing.module';



@NgModule({
  declarations: [
    RequestBookComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RequestBookRoutingModule
  ],
  exports:[
    RequestBookComponent
  ]
})
export class RequestBookModule { }
