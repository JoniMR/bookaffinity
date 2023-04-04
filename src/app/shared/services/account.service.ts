import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ChatInterface } from '../models/chat.model'
import { UserInterface } from '../../public/user/models/user.model'

@Injectable({
  providedIn: "root"
})

export class CreateChatService {
    private backendURL ='http://localhost:5000/api/user/'
    createdChatId: number    

  constructor(private http: HttpClient) {}

  createChat(user1: number, user2: number): Observable<ChatInterface>{
    return this.http.post<ChatInterface>(`${this.backendURL}create/chat`, {user1: user1, user2: user2})
  }

  getUserById(id_user: number): Observable<UserInterface>{
    return this.http.get<UserInterface>(`${this.backendURL}get/user/${id_user}`)
  }

  sendUSerId(){

  }
  
}