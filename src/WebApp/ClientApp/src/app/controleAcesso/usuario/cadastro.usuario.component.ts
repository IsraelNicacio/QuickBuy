import { Pessoa } from 'src/app/modelos/pessoa';
import { PessoaService } from './../../services/pessoa/pessoa.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: "app-cadastro-usuario",
    templateUrl: "./cadastro.usuario.component.html"
})

export class CadastroUsuarioComponent implements OnInit {

    public pessoa: Pessoa;
    public ativarSpinner: boolean;
    public mensagem: string;
    public pessoaCadastrada: boolean;

    constructor(private pessoaServico: PessoaService) {
    }

    ngOnInit(): void {
        this.pessoa = new Pessoa();
    }

    public cadastrar() {
this.ativarSpinner = true;

        this.pessoaServico.cadastrarPessoa(this.pessoa)
            .subscribe(
                data => {
                    this.pessoaCadastrada = true;
                    this.mensagem = "";
                    this.ativarSpinner = false;
                },
                err => {
                    this.mensagem = err.error;
                    console.log(this.mensagem)
                    this.ativarSpinner = false;
                }
            );
    }

}