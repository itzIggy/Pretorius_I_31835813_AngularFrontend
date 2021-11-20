import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

    declare token: string;

    constructor(private http: HttpClient){}


    uploadFile(file: any): Observable<any> {
        const formData = new FormData();

        formData.append("file", file[0]);
        console.log(file);

        const headers = new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem('token'));

        return this.http.post('http://localhost:8090/photo/uploadFile', formData, {'headers':headers});
    }

}