import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Member } from './member';
import { MemberService } from './member.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'imageFrontEnd';
  public members: Member[] = [];
  
  constructor() { }

  ngOnInit(){
    // this.getMembers();
  }

  // public getMembers(): void{
  //   this.memberService.getMembers().subscribe(
  //     (response: Member[]) => {
  //       this.members = response;
  //     },
  //     (error:HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }
}
