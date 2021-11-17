import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  selectedFiles: FileList;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;
  file:string ;
  currentFileUpload: File;

  constructor(private uploadService: UploadService, private http: HttpClient) { }

  ngOnInit(): void {
    this.upload();
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;
    const currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.uploadFile(this.currentFileUpload).subscribe(event => {
      let selectedFiles = undefined;
    });
  }
}
