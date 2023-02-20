import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './pages/chat/chat.component';
import { MailboxComponent } from './components/mailbox/mailbox.component';
import { ContactsComponent } from './components/contacts/contacts.component';


@NgModule({
  declarations: [
    ChatComponent,
    MailboxComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
