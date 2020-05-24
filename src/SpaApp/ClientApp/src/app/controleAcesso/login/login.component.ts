import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/modelos/pessoa';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public pessoa: Pessoa;
  public returnUrl : string;

  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
  }

  entrar() {
    if (this.pessoa.email == "israel.nicacio@gmail.com" && this.pessoa.senha == "123456") {
      sessionStorage.setItem("usuario_autenticado", "1");
      this.router.navigate([this.returnUrl])
    }
  }

  ngOnInit() {
    this.pessoa = new Pessoa();
    this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
  }
}
