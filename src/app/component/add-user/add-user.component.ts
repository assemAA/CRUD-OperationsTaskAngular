import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent  implements OnInit{

  usersData : User[] = [] ;
  lastId : number = 0 ;
 
  userForm = new FormGroup ({
    userName : new FormControl('' ,[ Validators.required , Validators.pattern(/^[A-Za-z]+$/)]),
    userEmail : new FormControl('' , [Validators.required , Validators.pattern( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]) ,
    userpassword : new FormControl('', [Validators.required , Validators.minLength(8)])
  })

  login(event : HTMLFormElement) {
    event['preventDefault()'] 

    if (this.validateForm()) {
     let userId =  this.lastId
     let userName = this.getUserNameStatus.value 
     let userEmail = this.getEmailStatus.value
     let userPassword = this.getPasswordStatus.value  

     let userData : User = new User (userId , userName , userEmail , userPassword) ;
     //console.log(this.userData)
     this.userService.addNewUser(userData).subscribe((res:any) => {})
     this.activeRoute.navigateByUrl('/users')
    }

  }

  constructor (private userService : UsersService , private activeRoute : Router) {
    
  }

  ngOnInit () {
    this.userService.getAllUsers().subscribe( (data : User[] ) => {
      this.usersData = data
      this.lastId = ++this.usersData[this.usersData.length-1].id
    })
  }

  get getUserNameStatus () {
    return this.userForm.controls['userName'];
  }

  get getEmailStatus () {
    return this.userForm.controls['userEmail'];
  }

  get getPasswordStatus () {
    return this.userForm.controls['userpassword'];
  }

  validateForm () {

    if (this.getUserNameStatus.errors == null && this.getEmailStatus.errors == null && this.getPasswordStatus.errors == null) 
      return true
    else 
      return false
    
  }
}
