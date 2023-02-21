import { ChatModule } from './chat/chat.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ChatModule
  ],
  exports: [
    ChatModule
  ]
})
export class PrivateModule { }
