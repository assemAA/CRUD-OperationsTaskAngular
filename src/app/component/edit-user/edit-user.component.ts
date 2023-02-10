import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent {
 
  userID : number = 0 ;

  constructor(
    private userService: UsersService,
    private activeRoute: Router,
    private activeRouter: ActivatedRoute
  ) {
    this.userID = activeRouter.snapshot.params['id'] ;
    
  }

  userForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Za-z]+$/),
    ]),
    userEmail: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ),
    ]),
    userpassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  edit(event: HTMLFormElement) {
    event['preventDefault()'];

    if (this.validateForm()) {
      let userName = this.getUserNameStatus.value;
      let userEmail = this.getEmailStatus.value;
      let userPassword = this.getPasswordStatus.value;

      let userData : User = new User (this.userID , userName , userEmail , userPassword) ;
      
      this.userService.editUserData(userData , this.userID).subscribe((res: any) => {});
      this.activeRoute.navigateByUrl('/users');
    }
  }



  ngOnInit() {
    
  }

  get getUserNameStatus() {
    return this.userForm.controls['userName'];
  }

  get getEmailStatus() {
    return this.userForm.controls['userEmail'];
  }

  get getPasswordStatus() {
    return this.userForm.controls['userpassword'];
  }

  validateForm() {
    if (
      this.getUserNameStatus.errors == null &&
      this.getEmailStatus.errors == null &&
      this.getPasswordStatus.errors == null
    )
      return true;
    else return false;
  }
}
