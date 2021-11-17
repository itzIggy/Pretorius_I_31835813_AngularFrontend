import { HttpErrorResponse } from '@angular/common/http';
import { enableProdMode, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LoginCredentials } from './client-home/LoginCredentials';
import { LoginService } from './client-home/LoginCredentials.service';

enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = "ImageFrontEnd";
  
  
  constructor() { }

  ngOnInit(): void{
  }
  
}
