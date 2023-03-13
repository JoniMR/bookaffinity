import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './pages/chat/chat.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactComponent } from './components/contact/contact.component';
import { MatCardModule } from '@angular/material/card';
import { MailboxHeaderComponent } from './components/mailbox-header/mailbox-header.component';
import { MailboxChatboxComponent } from './components/mailbox-chatbox/mailbox-chatbox.component';
import { MailboxMessageComponent } from './components/mailbox-message/mailbox-message.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    ChatComponent,
    ContactsComponent,
    ContactComponent,
    MailboxHeaderComponent,
    MailboxChatboxComponent,
    MailboxMessageComponent,
  ],
  imports: [CommonModule, ChatRoutingModule, MatCardModule, MatInputModule, FormsModule, MatButtonModule],
  exports: [ChatComponent, ContactsComponent],
})
export class ChatModule {}
