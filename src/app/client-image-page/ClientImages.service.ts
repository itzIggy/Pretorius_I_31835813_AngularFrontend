import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientImageService {

    constructor(private http: HttpClient){}

    getPhotos(): Observable<any> {
        let header = new HttpHeaders({"Authorization": "Bearer " + localStorage.getItem('token')?.toString});

        const headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Authorization', "Bearer " + localStorage.getItem('token'));

        return this.http.get<any>("http://localhost:8090/photo/getPhotos",{headers : headers})
    }

  

}