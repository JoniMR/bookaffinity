import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './pages/chat/chat.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactComponent } from './components/contact/contact.component';
import { MailboxHeaderComponent } from './components/mailbox-header/mailbox-header.component';
import { MailboxChatboxComponent } from './components/mailbox-chatbox/mailbox-chatbox.component';
import { MailboxMessageComponent } from './components/mailbox-message/mailbox-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
@NgModule({
  declarations: [
    ChatComponent,
    ContactsComponent,
    ContactComponent,
    MailboxHeaderComponent,
    MailboxChatboxComponent,
    MailboxMessageComponent,
  ],
  imports: [CommonModule, ChatRoutingModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [ChatComponent, ContactsComponent],
})
export class ChatModule {}
