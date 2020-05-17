import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/modelos/pessoa';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public pessoa;
  public usuarioAutenticado: boolean;

  constructor() { 
    this.pessoa = new Pessoa();
  }

  entrar() {
    if(this.pessoa.email == "israel@nicacio.com" && this.pessoa.senha == "123"){
      this.usuarioAutenticado = true;
    }
    else{
      this.usuarioAutenticado = false;
    }
    
  }

  ngOnInit() {
  }

}
