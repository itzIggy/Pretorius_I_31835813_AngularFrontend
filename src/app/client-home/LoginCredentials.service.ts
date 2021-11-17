import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { LoginCredentials } from './LoginCredentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = 'http://localhost:8090/auth/';

  constructor(private http: HttpClient){}

  login(login: LoginCredentials): Observable<any> {
    const header = {"content-type": 'application/json'}
    const body = JSON.stringify(login);

    return this.http.post(this.URL + 'signIn', body,{'headers':header})
  }

  

}
