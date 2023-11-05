import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private alfabeto:string = 'abcdefghijklmnopqrstuvwxyz';
  text:string='';
  key:number=0;
  mode:boolean=true;

  constructor(private _ar:ActivatedRoute){
    console.log('hola');
    this.recoupData;
  }

  recoupData(){ //recoupe es lo mismo que recover. jajajajaja.
    const user = this._ar.snapshot.params;
    const {email,password} = this._ar.snapshot.params //->esta es otra forma de hacerlo
    // const user = this._ar.snapshot.paramMap.get('email');
    // const user = this._ar.snapshot.data;


    console.log('estoy recuperando la data');
    console.log(user);
    console.log(email);
    console.log(password);
  }


}
