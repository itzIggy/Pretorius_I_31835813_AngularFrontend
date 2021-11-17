import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { RegisterCredentials } from './RegisterCredentials';

@Injectable({
  providedIn: 'root'
})
export class RegisterCredentialsService {

  private URL = 'http://localhost:8090/Members/';

  constructor(private http: HttpClient){}

  register(Register: RegisterCredentials): Observable<any> {
    const header = {"content-type": 'application/json'}
    const body = JSON.stringify(Register);

    return this.http.post(this.URL + 'add/members', body,{'headers':header})
  }
}
