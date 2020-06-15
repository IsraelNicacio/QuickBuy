import { PessoaService } from './../../services/pessoa/pessoa.service';
import { Pessoa } from './../../modelos/pessoa';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: "app-cadastro-usuario",
    templateUrl: "./cadastro.usuario.component.html"
})

export class CadastroUsuarioComponent implements OnInit {

    public pessoa: Pessoa;

    constructor(private pessoaServico: PessoaService) {
    }

    ngOnInit(): void {
        this.pessoa = new Pessoa();
    }

    public Cadastrar() {
        this.pessoaServico.cadastrarPessoa(this.pessoa)
            .subscribe(
                data => {},
                err => {
                    console.log(err)
                }
            );
    }

}