import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './pages/chat/chat.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MatListModule } from '@angular/material/list';
import { ContactComponent } from './components/contact/contact.component';
import { MatCardModule } from '@angular/material/card';
import { MailboxHeaderComponent } from './components/mailbox-header/mailbox-header.component';
import { MailboxChatboxComponent } from './components/mailbox-chatbox/mailbox-chatbox.component';
import { MailboxMessageComponent } from './components/mailbox-message/mailbox-message.component';

@NgModule({
  declarations: [
    ChatComponent,
    ContactsComponent,
    ContactComponent,
    MailboxHeaderComponent,
    MailboxChatboxComponent,
    MailboxMessageComponent,
  ],
  imports: [CommonModule, ChatRoutingModule, MatListModule, MatCardModule],
  exports: [ChatComponent, ContactsComponent],
})
export class ChatModule {}
