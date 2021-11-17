import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

    constructor(private http: HttpClient){}

    uploadFile(file: File): Observable<HttpEvent<{}>> {
        const formData: FormData = new FormData();

        formData.append('file', file);

        const req = new HttpRequest('POST', 'http://localhost:8090/photo/uploadFile', formData, {
            reportProgress: true,
            responseType:'text'
        });

        return this.http.request(req);
    }

}