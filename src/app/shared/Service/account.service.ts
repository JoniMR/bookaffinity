import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ChatInterface } from './chatInterface.model'

@Injectable({
  providedIn: "root"
})

export class CreateChatService {
    private backendURL ='http://localhost:5000/api/user/create/chat'
    createdChatId: number    

  constructor(private http: HttpClient) {}

  createChat(user1: number, user2: number): Observable<ChatInterface>{
    return this.http.post<ChatInterface>(`${this.backendURL}`, {user1: user1, user2: user2})
  }
  
}