import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  userId : any ;
  userdate : any ;
  constructor(public activeRoute : ActivatedRoute , private usersServices : UsersService) {
    this.userId = this.activeRoute.snapshot.params['id']
  }
  

  ngOnInit(){
     this.usersServices.getUserById(this.userId).
      subscribe((arg:any) => this.userdate = arg);
    
  }



}
