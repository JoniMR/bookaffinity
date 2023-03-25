import { MailboxMessageService } from './../../services/mailbox-message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mailbox-chatbox',
  templateUrl: './mailbox-chatbox.component.html',
  styleUrls: ['./mailbox-chatbox.component.scss']
})
export class MailboxChatboxComponent implements OnInit {

  message : string

  constructor(private messageService: MailboxMessageService) { }

  ngOnInit(): void {
    this.message = this.messageService.serviceMessage
    console.log(`El mensaje: ${this.message}`)
  }


}
