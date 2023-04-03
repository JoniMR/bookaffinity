import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookInterface } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private booksUrl: string = 'http://localhost:5000/api/book/get/book/all';
  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<BookInterface[]> {
    // TO-DO: tratar el error 500
    const lista = this.http.get<BookInterface[]>(this.booksUrl);

    return lista;

  }
}
