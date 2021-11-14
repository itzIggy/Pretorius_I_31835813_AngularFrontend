import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Member } from './member';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.apiUrl}/members/all`);
  }

}
