import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentInterface } from '../models/detail.model';

@Injectable({
providedIn: 'root',
})
export class ReviewService {
private commentUrl:string = "http://localhost:5000/api/book/get/comment/all/"
private reviewUrl: string = 'http://localhost:5000/api/user/add/comment';
constructor(private http: HttpClient) {}

addComment(rating: number, text: string): Observable<number> {
    const body = {
    rating: rating,
    text: text,
    };
    // TO-DO: tratar el error 500
    return this.http.post<number>(this.reviewUrl, body);
}
addImgComment(): Observable<number> {
    const body = {
    };
    // TO-DO: tratar el error 500
    return this.http.post<number>(this.reviewUrl, body);
}
getAllCommentByBookId(id_book:number): Observable<CommentInterface[]> {

    return this.http.get<CommentInterface[]>(`${this.commentUrl}${id_book}`);
}

}
