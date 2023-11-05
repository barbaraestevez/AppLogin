import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

interface User{
  email:string;
  password:string;
  isLogged?:boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  currentUser?:User;
  userAdmin:User = {
    email:'admin@gmail.com', 
    password:'123456',
    isLogged:true
  }

  constructor(private _route:Router){}

  sendLog(miForm:NgForm){ //creamos un método para loguearnos
    this.userAdmin.isLogged=false;
    this.currentUser = {email:miForm.value.email, password:miForm.value.password, isLogged:true}
    if(this.currentUser?.email===this.userAdmin.email && this.currentUser?.password===this.userAdmin.password){
    this.currentUser.isLogged = true;
    localStorage.setItem('token',Math.random().toString());//almacenamos la info en localstorage y seguimos a la home pero la guarda lo va a parar si no coincide la lógica
    this._route.navigate(['home',this.currentUser]);}
    else{alert('Usuario o Contraseña incorrectos')};
    console.log(this.currentUser);

}
}
