import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MailboxMessageService } from '../../services/mailbox-message.service';

@Component({
  selector: 'app-mailbox-message',
  templateUrl: './mailbox-message.component.html',
  styleUrls: ['./mailbox-message.component.scss']
})

export class MailboxMessageComponent implements OnInit {
  message: any;
  messageForm : FormGroup

  constructor(private messageService: MailboxMessageService) { }

  ngOnInit(): void {
    this.messageForm = new FormGroup({
      message: new FormControl()
      });
  }
  
  onSubmit() {
    this.messageService.sendDataToService(this.messageForm.value.message)
    this.messageForm.reset()
    // TODO : Almacenar mensajes en la BBDD
  }
  

}
