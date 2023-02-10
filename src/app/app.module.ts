import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './component/users/users.component';
import { HomeComponent } from './component/home/home.component';
import { UserComponent } from './component/user/user.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { NoFoundComponent } from './component/no-found/no-found.component';
import { UsersService } from './services/users.service';
import {HttpClientModule} from '@angular/common/http';
import { ContactComponent } from './component/contact/contact.component'

const routes : Routes = [
 { path : '' , component : HomeComponent} , 
 {path : 'users' , component : UsersComponent} ,
 {path : 'userDetails/:id' , component : UserComponent} ,
 {path : 'newUser' , component : AddUserComponent} , 
 {path : 'edituser/:id' , component:EditUserComponent} ,
 {path : 'contact' , component : ContactComponent} ,
  {path : '**' , component : NoFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    UserComponent,
    AddUserComponent,
    EditUserComponent,
    NavbarComponent,
    NoFoundComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) ,
    HttpClientModule , 
    ReactiveFormsModule ,
    
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
