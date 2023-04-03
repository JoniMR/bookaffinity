import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookInterface } from '../models/book.model';

@Injectable({
providedIn: 'root',
})
export class DetailService {
private reviewUrl: string = 'http://localhost:5000/api/';
constructor(private http: HttpClient) {}

getBookById(id_book:number): Observable<BookInterface> {
    console.log("Hello servicio del front")
    console.log(`${this.reviewUrl}book/get/${id_book}`)
    // TO-DO: tratar el error 500
    return this.http.get<BookInterface>(`${this.reviewUrl}book/get/${id_book}`);
}
}
