import { AddCopyModule } from './add-copy/add-copy.module';
import { ChatModule } from './chat/chat.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { RequestBookModule } from './request-book/request-book.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    AddCopyModule,
    RequestBookModule
  ],
  exports: [
    AddCopyModule,
    ChatModule
  ]
})
export class PrivateModule { }
