import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { json } from 'stream/consumers';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginsingup',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './loginsingup.component.html',
  styleUrl: './loginsingup.component.css'
})
export class LoginsingupComponent {
 activeform : 'login' | 'register' = 'login';
 registerObj:registerModel = new registerModel();
 loginObj: loginModel = new loginModel();
 constructor(private  _snackbar:MatSnackBar, private _router: Router){}

 toggleform(form : 'login'| 'register')

 {
  this.activeform =form
 }

 registerform()
 {
  debugger;
  const localusers = localStorage.getItem('user');
  if(localusers != null)
  {
  const users = JSON.parse(localusers);
  users.push(this.registerObj);
  localStorage.setItem('users', JSON.stringify(users));
  }else{
    const users =[];
    users.push(this.registerObj);
    localStorage.setItem('users', JSON.stringify(users))
  }
  this._snackbar.open('user register successfully', 'close');
 }
 loginform()
 {
  const localusers = localStorage.getItem('users');
  if(localusers != null){
    const users = JSON.parse(localusers);
    const isUserExist = users.find((user:registerModel)=> user.email == this.loginObj.email && user.password ==this.loginObj.password)
    if(isUserExist != undefined)
    {
      this._snackbar.open('login Successful','close');
      localStorage.setItem('loggedUser', JSON.stringify(isUserExist));
      this._router.navigateByUrl('/dashboard');
    }else{
      this._snackbar.open('Email or Password is incorrect!');
    }
  }
 }
}
export class registerModel{
  name: string;
  email:string;
  password: string;
  constructor(){
    this.name ="";
    this.email ="";
    this.password ="";
  }
}

export class loginModel{
  email:string;
  password: string;
  constructor(){
    this.email ="";
    this.password ="";
  }
}
