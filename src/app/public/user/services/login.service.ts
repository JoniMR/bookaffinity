import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserInterface } from "../models/user.model";

@Injectable({
    providedIn:"root"
})

export class LoginService{
    private loginUrl:string = "http://localhost:5000/api/user/login"
    constructor(private http:HttpClient){}

    getUserbyEmailAndPassword(email : string, pass : string) : Observable<UserInterface>{
        const body = {
            email : email,
            pass : pass
        }
        // TO-DO: tratar el error 500
        return this.http.post<UserInterface>(this.loginUrl, body);
    }

    
}