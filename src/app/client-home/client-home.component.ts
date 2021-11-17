import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './LoginCredentials.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {

  declare token: string;

  constructor(private loginService: LoginService, private router:Router){}

  ngOnInit(): void {
    
  }

  login(form: NgForm): void {
    this.loginService.login(form.value).subscribe(
      (Response: any)=> {
        this.token = Response.payload;
        localStorage.setItem('token', this.token);
        this.router.navigateByUrl('/Images');
      },
      (error: HttpErrorResponse) => {
        alert("Incorrect email or password");
      }
      );
  }
}
