import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterCredentials } from './RegisterCredentials';
import { RegisterCredentialsService } from './RegisterCredentials.service';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent implements OnInit {

  declare token: string;

  constructor(private regService: RegisterCredentialsService, private router:Router){}

  ngOnInit(): void {
    
  }

  register(form: NgForm): void {
    this.regService.register(form.value).subscribe(
      (Response: any)=> {
        this.token = Response.payload;
        localStorage.setItem('token', this.token);
        this.router.navigateByUrl('/Login');
      },
      (error: HttpErrorResponse) => {
        alert("Could not register");
      }
      );
  }

}
