import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users'


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  url = "http://localhost:3000/login"

  login(user: Users): Observable<any> {
    return this.httpClient.post(this.url, JSON.stringify(user), {
      headers: new HttpHeaders ({'Content-Type' : 'application/json'}),
      observe: 'response'
    })
}

}
