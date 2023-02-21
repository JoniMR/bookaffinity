import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './pages/chat/chat.component';
import { MailboxComponent } from './components/mailbox/mailbox.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MatListModule } from '@angular/material/list';
import { ContactComponent } from './components/contact/contact.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    ChatComponent,
    MailboxComponent,
    ContactsComponent,
    ContactComponent,
  ],
  imports: [CommonModule, ChatRoutingModule, MatListModule, MatCardModule],
  exports: [ChatComponent, MailboxComponent, ContactsComponent],
})
export class ChatModule {}
