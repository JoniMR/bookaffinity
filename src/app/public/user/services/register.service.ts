import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private registerUrl: string = 'http://localhost:5000/api/user/add/user';
  constructor(private http: HttpClient) {}

  addUser(name: string, email: string, pass: string): Observable<number> {
    const body = {
      name: name,
      email: email,
      pass: pass,
      picture: '',
      status: 1,
      id_rol: '1',
    };
    // TO-DO: tratar el error 500
    return this.http.post<number>(this.registerUrl, body);
  }
}
