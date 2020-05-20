import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/modelos/pessoa';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public pessoa;

  constructor() { 
    this.pessoa = new Pessoa();
  }

  entrar() {
    
    
  }

  ngOnInit() {
  }

}
