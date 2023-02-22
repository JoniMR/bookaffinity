import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {

  usersContacts: object[];
  constructor() {

    this.usersContacts = [
      {name: "JGabriel", lastMessage: "Thanks, Thomas"},
      {name: "JGabriel", lastMessage: "Thanks, Thomas"},
      {name: "JGabriel", lastMessage: "Thanks, Thomas"},
      {name: "JGabriel", lastMessage: "Thanks, Thomas"},
      {name: "JGabriel", lastMessage: "Thanks, Thomas"},
      {name: "JGabriel", lastMessage: "Thanks, Thomas"},
      {name: "JGabriel", lastMessage: "Thanks, Thomas"},
      {name: "JGabriel", lastMessage: "Thanks, Thomas"},
      {name: "JGabriel", lastMessage: "Thanks, Thomas"},
      {name: "JGabriel", lastMessage: "Thanks, Thomas"},
      {name: "JGabriel", lastMessage: "Thanks, Thomas"},
      {name: "JGabriel", lastMessage: "Thanks, Thomas"},
      {name: "JGabriel", lastMessage: "Thanks, Thomas"},
      {name: "JGabriel", lastMessage: "Thanks, Thomas"}
    ]
  }

  ngOnInit(): void {}
}
