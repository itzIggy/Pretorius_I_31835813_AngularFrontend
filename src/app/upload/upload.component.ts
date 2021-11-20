import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadService } from './upload.service';
import { Router } from '@angular/router';

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget & Event;
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  declare selectedFiles: any;
  declare selectedFile: File | null;
  public files: any = [];

  constructor(private uploadService: UploadService, private router: Router) { }

  ngOnInit(): void {
  }

  selectFile(event: any){
    let files = (<HTMLInputElement>event.target).files;
    this.selectedFiles = files;
    console.log(event);
  }


  upload(): void {
    console.log(this.files);
    this.uploadService.uploadFile(this.files).subscribe(
      (Response: any)=> {
         this.router.navigateByUrl('/Images');
         },
         (error: HttpErrorResponse) => {
        
           alert(error.message);
         }
         );
  }

  public pics: any[] = [];


  onChange(fileList: any){
    this.pics = fileList;

  }

  uploadFile(event: any) {
    for (let i = 0; i < event.length; i++) {
      const element = event[i];
      this.files.push(element)
      }
  }

  deleteAttachment(index: any) {
   this.files.splice(index, 1)
  }
}
