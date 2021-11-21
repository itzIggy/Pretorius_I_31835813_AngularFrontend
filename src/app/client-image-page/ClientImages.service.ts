import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ClientImageService {

    constructor(private http: HttpClient){}


    getPhotos(): Observable<any> {
        const headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Authorization', "Bearer " + localStorage.getItem('token'));
        return this.http.get<any>("http://localhost:8090/photo/getPhotos",{headers : headers})
    }

    public deleteImages(photoName: String): Observable<any> {

      const headers= new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem('token'));
  
      const requestOptions = { headers: headers };
   
      return this.http.delete("http://localhost:8090/photo/deleteFile/" + photoName , { headers: headers })
    }
  
    searchForPhoto(imageName: any):Observable<any>{
      const headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Authorization', "Bearer " + localStorage.getItem('token'));

      const requestOptions = { headers: headers };
      
      return this.http.get<any>("http://localhost:8090/photo/searchPhoto/" + imageName ,{headers : headers})
  }

}