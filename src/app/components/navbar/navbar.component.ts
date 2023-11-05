import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent { //implements OnInit

  isLogged:boolean = false;

  constructor(private _route:Router) {
    this.checkLogged();
   }

   checkLogged() {
     this.isLogged = localStorage.getItem('token') != null;
     return this.isLogged;
   }

   logout() {
     if(localStorage.getItem('token')) localStorage.removeItem('token');
     alert("Usuario deslogueado");
     this._route.navigate(['']);
   }

  /*ngOnInit(): void {
  }*/

}
