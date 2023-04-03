import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookInterface } from '../models/book.model';

@Injectable({
providedIn: 'root',
})
export class ReviewService {
private reviewUrl: string = 'http://localhost:5000/api/';
constructor(private http: HttpClient) {}

getBookById(id_book:number): Observable<BookInterface> {

    // TO-DO: tratar el error 500
    return this.http.get<BookInterface>(`${this.reviewUrl}book/get/${id_book}`);
}
}
