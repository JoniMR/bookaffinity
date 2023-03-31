import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MailboxMessageService {

  serviceMessage : string

  constructor() { }

  sendDataToService(message : string){
    this.serviceMessage = message
    console.log(`Este es el mensaje¨:  ${this.serviceMessage}`)
  }

}
