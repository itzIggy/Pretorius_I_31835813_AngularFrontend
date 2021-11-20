import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientImageService } from './ClientImages.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-client-image-page',
  templateUrl: './client-image-page.component.html',
  styleUrls: ['./client-image-page.component.css']
})
export class ClientImagePageComponent implements OnInit{

  declare pictures: any;

  constructor(private clientImageService: ClientImageService){}


  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(): void{
    this.clientImageService.getPhotos().subscribe(
      (Response: any) => {
          this.pictures = Response.payload;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
    
  }

}
