import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mailbox-header',
  templateUrl: './mailbox-header.component.html',
  styleUrls: ['./mailbox-header.component.scss']
})
export class MailboxHeaderComponent implements OnInit {

  name: string;
  lastMessage: string;

  constructor() {
    this.name = "JGabriel";
    this.lastMessage = "Thanks, Thomas";
  }
  ngOnInit(): void {
  }

}
