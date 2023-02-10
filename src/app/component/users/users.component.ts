import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 
  usersdata : User[] = [] ;
  constructor(private usersServices : UsersService , private router:Router) {

  }

 
  
  ngOnInit(): void {
    this.usersServices.getAllUsers().subscribe((arg:User[]) => this.usersdata = arg);
  }

  goToDetails(userId :number){
    this.router.navigate(['/userDetails/' , userId])
  }

  deleteUser(userId: number) {
    this.usersServices.deleteUser(userId).subscribe( (response:any)=> {
      this.usersdata = this.usersdata.filter((ele:User)=> {
        return ele.id != userId
      })
    });
  }
  
}
