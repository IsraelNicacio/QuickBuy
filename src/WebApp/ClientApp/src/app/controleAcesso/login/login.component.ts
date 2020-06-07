import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pessoa } from 'src/app/modelos/pessoa';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public pessoa;
  public returnUrl: string;
  public enableSpinner: boolean;
  public message: string;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private pessoaServico: PessoaService) {
  }

  ngOnInit() {
    this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
    this.pessoa = new Pessoa();
  }

  entrar() {
    this.enableSpinner = true;
    this.pessoaServico.verificarPessoa(this.pessoa)
      .subscribe(
        pessoa_json => {
          this.pessoaServico.pessoa = pessoa_json;

          if (this.returnUrl == null) {
            this.router.navigate(['/']);
          } else {
            this.router.navigate([this.returnUrl]);
          }
        },
        err => {
          this.enableSpinner = false;
          this.message = err.console.error;

          console.log(err);
        }
      );
  }
}
