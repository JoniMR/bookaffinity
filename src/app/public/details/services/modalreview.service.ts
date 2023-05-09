import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { CommentInterface } from '../models/comment.model'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: "root"
})

export class CreateChatService {
    private backendURL ='http://localhost:5000/api/book'  

  constructor(private http: HttpClient) {}

  getCommentsRating(id_book: number): number{
    // let commentRating : number
    // let ratingSumatory : number
    // const comments = this.http.get<CommentInterface>(`${this.backendURL}/get/comment/all/${id_book}`)
    

    // comments.pipe(
    //   map(() => {})
    // ).subscribe

    // commentRating = ratingSumatory / comments.length

    return 1
  }
  
}0