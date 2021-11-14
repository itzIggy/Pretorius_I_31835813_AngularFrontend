import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {
  //members : any;

  constructor(){
 // constructor(private service: MemberService) {
    
  }

  ngOnInit(): void {
    // this.service.getMembers().subscribe(data => {
    //     this.members=data;
    // })
  }

}
